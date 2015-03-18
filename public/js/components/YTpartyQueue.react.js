var React = require('react');
var YTpartyItem = require('./YTpartyItem.react');

var YTpartyQueue = React.createClass({	
	render: function() {
		var allQueues = this.props.queueList;
     	var queue = [];

	    for (var key in allQueues) {
	      queue.push(<YTpartyItem key={key} item={allQueues[key]} />);
	    }

	  	return (
	      <div>
	    	queue List
	    	{queue}
	      </div>
	  	);
  }
});

module.exports = YTpartyQueue;