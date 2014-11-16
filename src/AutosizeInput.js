var React = require('react');

var sizerStyle = { position: 'absolute', visibility: 'hidden', height: 0, width: 0, overflow: 'scroll', whiteSpace: 'nowrap' };

var AutosizeInput = React.createClass({
	
	displayName: 'AutosizeInput',

	propTypes: {
		value: React.PropTypes.any,                 // field value
		defaultValue: React.PropTypes.any,          // default field value
		onChange: React.PropTypes.func,             // onChange handler: function(newValue) {}
		style: React.PropTypes.object,              // css styles for the outer element
		className: React.PropTypes.string,          // className for the outer element
		inputStyle: React.PropTypes.object,         // css styles for the input element
		inputClassName: React.PropTypes.string      // className for the input element
	},
	
	getDefaultProps: function() {
		return {
			minWidth: 1
		};
	},
	
	getInitialState: function() {
		return {
			inputWidth: this.props.minWidth
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
		widthNode.style.fontSize = inputStyle.fontSize;
		widthNode.style.fontFamily = inputStyle.fontFamily;
	},
	
	updateInputWidth: function() {
		if (!this.isMounted()) {
			return;
		}
		var newInputWidth = this.refs.sizer.getDOMNode().scrollWidth + 2;
		if (newInputWidth < this.props.minWidth) {
			newInputWidth = this.props.minWidth;
		}
		if (newInputWidth !== this.state.inputWidth) {
			this.setState({
				inputWidth: newInputWidth
			});
		}
	},
	
	getInput: function() {
		return this.refs.input;
	},
	
	focus: function() {
		this.refs.input.getDOMNode().focus();
	},
	
	select: function() {
		this.refs.input.getDOMNode().select();
	},
	
	render: function() {
		
		var nbspValue = (this.props.value || '').replace(/ /g, '&nbsp;');
		
		var wrapperStyle = this.props.style || {};
		wrapperStyle.display = 'inline-block';
		
		var inputStyle = this.props.inputStyle || {};
		inputStyle.width = this.state.inputWidth;
		
		return (
			<div className={this.props.className} style={wrapperStyle}>
				<input {...this.props} ref="input" className={this.props.inputClassName} style={inputStyle} />
				<div ref="sizer" style={sizerStyle} dangerouslySetInnerHTML={{ __html: nbspValue }} />
			</div>
		);
		
	}
	
});

module.exports = AutosizeInput;
