var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var YTpartyConstants = require('../constants/YTpartyConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _playing = {};

var _queue = [
	{
		'id': 1,
		'title': 'title1',
		'url': 'https://www.youtube.com/embed/RB-RcX5DS5A',
    'videoid': 'RB-RcX5DS5A'    
	},
	{
		'id': 2,
		'title': 'title2',
		'url': 'https://www.youtube.com/embed/dvgZkm1xWPE',
    'videoid': 'dvgZkm1xWPE'
	},
	{
		'id': 3,
		'title': 'title3',
		'url': 'https://www.youtube.com/embed/1G4isv_Fylg',
    'videoid': '1G4isv_Fylg'
	}

];


var playItem = function(data){  
  _playing = data;    
}

var playNext = function(){
  _playing = _queue[0];
  _queue.shift();
};

var addItem = function(data){
  _queue.push(data);
}

var YTpartyStore = assign({}, EventEmitter.prototype, {

  getQueue: function() {
    return _queue;
  },

  getPlaying: function(){
    return _playing;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) { 

  switch(action.actionType) {         
    case YTpartyConstants.YTP_CREATE:
      addItem(action.data);
      YTpartyStore.emitChange();
      break;
    case YTpartyConstants.YTP_PLAY:
      playItem(action.data);
      YTpartyStore.emitChange();
      break;
    case YTpartyConstants.YTP_PLAY_NEXT:
      playNext();
      YTpartyStore.emitChange();
      break;
    default:
      // no op
  }
});

module.exports = YTpartyStore;