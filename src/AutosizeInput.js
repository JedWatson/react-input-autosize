if (typeof require !== 'undefined') {
	var React = require('react');
}

var AutosizeInput = React.createClass({
	
	getInitialState: function() {
		return {
			inputWidth: 1
		};
	},
	
	componentDidMount: function() {
		this.copyInputStyles();
		this.updateInputWidth();
	},
	
	componentDidUpdate: function() {
		this.updateInputWidth();
	},
	
	copyInputStyles: function() {
		if (!this.isMounted() || !window.getComputedStyle) {
			return;
		}
		var inputStyle = window.getComputedStyle(this.refs.input.getDOMNode());
		var widthNode = this.refs.sizer.getDOMNode();
		widthNode.style.padding = inputStyle.padding;
		widthNode.style.fontSize = inputStyle.fontSize;
		widthNode.style.fontFamily = inputStyle.fontFamily;
	},
	
	updateInputWidth: function() {
		if (!this.isMounted()) {
			return;
		}
		var newInputWidth = this.refs.sizer.getDOMNode().scrollWidth;
		if (newInputWidth !== this.state.inputWidth) {
			this.setState({
				inputWidth: this.refs.sizer.getDOMNode().scrollWidth
			});
		}
	},
	
	render: function() {
		
		var valueString = this.props.value || '',
			valueWithNBSP = valueString.replace(/ /g, '&nbsp;');
		
		var inputStyle = this.props.style || {};
		inputStyle.width = this.state.inputWidth;
		
		var sizerStyle = { position: 'absolute', height: 0, width: 0, overflow: 'scroll', whiteSpace: 'nowrap' };
		
		return (
			<div>
				<input ref="input" style={inputStyle} onChange={this.props.onChange} value={this.props.value} />
				<div ref="sizer" style={sizerStyle} dangerouslySetInnerHTML={{ __html: valueWithNBSP }} />
			</div>
		);
		
	}
	
});

if (typeof module !== 'undefined') {
	module.exports = AutosizeInput;
}
