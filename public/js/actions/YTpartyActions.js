var AppDispatcher = require('../dispatcher/AppDispatcher');
var YTpartyConstants = require('../constants/YTpartyConstants');

var YTpartyActions = {
	addEntry: function(data){
		AppDispatcher.dispatch({
	  		actionType: YTpartyConstants.YTP_CREATE,
	  		data: data
    	});
	},
	playEntry: function(data){
		AppDispatcher.dispatch({
	  		actionType: YTpartyConstants.YTP_PLAY,
	  		data: data
    	});
	},
	playNext: function(){
		AppDispatcher.dispatch({
	  		actionType: YTpartyConstants.YTP_PLAY_NEXT	  		
    	});
	}

}

module.exports = YTpartyActions;