var React = require('react'),
	AutosizeInput = require('react-input-autosize');

var App = React.createClass({
	getInitialState: function() {
		return {
			inputValue: ''
		};
	},
	updateInputValue: function(event) {
		this.setState({
			inputValue: event.target.value
		});
	},
	render: function() {
		return <AutosizeInput value={this.state.inputValue} onChange={this.updateInputValue} />
	}
});

React.render(<App />, document.getElementById('app'));
