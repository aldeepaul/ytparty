var React = require('react');
var YTpartyActions = require('../actions/YTpartyActions');

var YTpartyItem = React.createClass({	
	render: function() {
	  	return (
	      <div>
	    	{this.props.item}
	    	<input	            
	            type="button"	            
	            value="play"
	            onClick={this._onClickPlay}
          	/>	    	
	      </div>
	  	);
  },

  _onClickPlay: function() {
    YTpartyActions.playEntry(this.props.item);    
  },
});

module.exports = YTpartyItem;