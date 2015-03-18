var React = require('react');
var playtube = require('playtube');
var YTpartyActions = require('../actions/YTpartyActions');
var player;

var YTpartyPlayer = React.createClass({		
	componentDidMount: function(){	
			var _that = this;		
			player = playtube.player('videoplayer', {});
    		player.on('stateChange', function (event) {
    			if(event.data == 0){
    				_that._vidEnded();
    			}    			
			});	
	},	
	render: function() {
		var playerstyle = {};
		var url= '';
		var videoid = this.props.data.videoid;
		
		if(typeof this.props.data.url == 'undefined' || this.props.data.url == ''){
			playerstyle = {display: 'none'};
		}else{			
			player.loadVideoById(videoid);
		}
	  	return (
	      <div>
	    	YTP player <br />
	    	currently playing: {this.props.data} <br />
	    	<div id="videoplayer" style={playerstyle}></div>	    	
	      </div>
	  	);
  },
  _vidEnded: function(){
	YTpartyActions.playNext();
  },

});

module.exports = YTpartyPlayer;