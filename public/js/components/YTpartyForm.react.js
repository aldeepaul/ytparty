var React = require('react');
var YTpartyActions = require('../actions/YTpartyActions');
var ENTER_KEY_CODE = 13;

YTpartyForm =React.createClass({
	getInitialState: function() {
	    return {
	      value: this.props.value || ''
	    };
  	},
	render: function(){
		return (
	      <div>
	      	Enter YT Url
	    	<input
		        className={this.props.className}
		        id={this.props.id}
		        placeholder={this.props.placeholder}		        
		        onChange={this._onChange}
		        onKeyDown={this._onKeyDown}	
		        value={this.state.value}	        
		        autoFocus={true}
      		/>
	      </div>
	  	);
	},
	_onChange: function(event){
		this.setState({
	      value: event.target.value
	    });
	},
	_onKeyDown: function(event){
		if (event.keyCode === ENTER_KEY_CODE) {
	      this._save();
	    }
	},
	_save: function() {
		var matchYoutubeUrl = function(url){
			var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
 			return (url.match(p)) ? RegExp.$1 : false ;
		};

		var payload = {
			'id': Math.random(),
			'title': '',
			'url': this.state.value,
    		'videoid': matchYoutubeUrl(this.state.value)    
		};
			    
		YTpartyActions.addEntry(payload);
	    this.setState({
	      value: ''
    	});
  	}
});

module.exports = YTpartyForm;