var React = require('react');
var YTpartyStore = require('../stores/YTpartyStore');
var YTpartyQueue = require('./YTpartyQueue.react');
var YTpartyPlayer = require('./YTpartyPlayer.react');
var YTpartyForm = require('./YTpartyForm.react');
var YTpartyActions = require('../actions/YTpartyActions');


var getYTPstate = function(){
	return {
		allQueue: YTpartyStore.getQueue(),
		playing: YTpartyStore.getPlaying()
	}
};

var YTpartyApp = React.createClass({

	getInitialState: function() {
    	return getYTPstate();
  	},

  	componentDidMount: function() {
    	YTpartyStore.addChangeListener(this._onChange);
    	YTpartyActions.playNext();
  	},

	componentWillUnmount: function() {
		YTpartyStore.removeChangeListener(this._onChange);
	},

	render: function() {
	  	return (
	      <div>
	    	YTP app
	    	<YTpartyPlayer data={this.state.playing}/>
	    	<YTpartyQueue queueList={this.state.allQueue} />
	    	<YTpartyForm id="yey" placeholder="paste YT url here"/>
	      </div>
	  	);
  	},

  	_onChange: function(){
		this.setState(getYTPstate());
  	}
});

module.exports = YTpartyApp;
