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
		
		return React.DOM.div({},
			React.DOM.input({
				ref: 'input',
				className: this.props.className,
				style: { width: this.state.inputWidth },
				onChange: this.props.onChange,
				value: this.props.value
			}),
			React.DOM.div({
				ref: 'sizer',
				style: { position: 'absolute', height: 0, width: 0, overflow: 'scroll', whiteSpace: 'nowrap' },
				dangerouslySetInnerHTML: { __html: valueWithNBSP }
			})
		);
	}
	
});

if (typeof module !== 'undefined') {
module.exports = AutosizeInput;
}
