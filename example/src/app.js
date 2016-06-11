var React = require('react');
var ReactDOM = require('react-dom');
var AutosizeInput = require('react-input-autosize');

var App = React.createClass({
	getInitialState () {
		return {
			value1: '',
			value2: 'example',
			value3: '',
			value4: '',
		};
	},
	updateInputValue (newValue, oldValue) {
		if (this.refs.autosizeInput1) {
			if (newValue.length > 10) {
				this.refs.autosizeInput1.setValue(oldValue);
			}
		}
	},
	render () {
		return (
			<div>
				<h3>Simple example:</h3>
				<AutosizeInput/>
				<h3>Styled example with default value:</h3>
				<AutosizeInput
					ref="autosizeInput1"
					defaultValue={this.state.value2}
					onChange={this.updateInputValue}
					style={{ background: '#eee', borderRadius: 5, padding: 5 }}
					inputStyle={{ border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }}
				/>
				<h3>Input with placeholder:</h3>
				<AutosizeInput
					placeholder="Placeholder"
					style={{ background: '#eee', borderRadius: 5, padding: 5 }}
					inputStyle={{ border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }}
				/>
				<h3>Input with placeholder as minimum width:</h3>
				<AutosizeInput
					placeholder="Placeholder"
					placeholderIsMinWidth
					style={{ background: '#eee', borderRadius: 5, padding: 5 }}
					inputStyle={{ border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }}
				/>
			</div>
		);
	},
});

ReactDOM.render(<App />, document.getElementById('app'));
