const React = require('react');

const sizerStyle = { position: 'absolute', visibility: 'hidden', height: 0, width: 0, overflow: 'scroll', whiteSpace: 'pre' };

const nextFrame = typeof window !== 'undefined' ? (function(){
	return window.requestAnimationFrame
		|| window.webkitRequestAnimationFrame
		|| window.mozRequestAnimationFrame
		|| function (callback) {
			window.setTimeout(callback, 1000 / 60);
		};
})().bind(window) : undefined; // If window is undefined, then we can't define a nextFrame function

const AutosizeInput = React.createClass({
	propTypes: {
		value: React.PropTypes.any,                 // field value
		defaultValue: React.PropTypes.any,          // default field value
		onChange: React.PropTypes.func,             // onChange handler: function(newValue) {}
		style: React.PropTypes.object,              // css styles for the outer element
		className: React.PropTypes.string,          // className for the outer element
		minWidth: React.PropTypes.oneOfType([       // minimum width for input element
			React.PropTypes.number,
			React.PropTypes.string
		]),
		inputStyle: React.PropTypes.object,         // css styles for the input element
		inputClassName: React.PropTypes.string      // className for the input element
	},
	getDefaultProps () {
		return {
			minWidth: 1
		};
	},
	getInitialState () {
		return {
			inputWidth: this.props.minWidth
		};
	},
	componentDidMount () {
		this.copyInputStyles();
		this.updateInputWidth();
	},
	componentDidUpdate () {
		this.updateInputWidth();
	},
	copyInputStyles () {
		if (!this.isMounted() || !window.getComputedStyle) {
			return;
		}
		const inputStyle = window.getComputedStyle(this.refs.input);
		if (!inputStyle) {
			return;
		}
		const widthNode = this.refs.sizer;
		widthNode.style.fontSize = inputStyle.fontSize;
		widthNode.style.fontFamily = inputStyle.fontFamily;
		widthNode.style.fontWeight = inputStyle.fontWeight;
		widthNode.style.fontStyle = inputStyle.fontStyle;
		widthNode.style.letterSpacing = inputStyle.letterSpacing;
		if (this.props.placeholder) {
			const placeholderNode = this.refs.placeholderSizer;
			placeholderNode.style.fontSize = inputStyle.fontSize;
			placeholderNode.style.fontFamily = inputStyle.fontFamily;
			placeholderNode.style.fontWeight = inputStyle.fontWeight;
			placeholderNode.style.fontStyle = inputStyle.fontStyle;
			placeholderNode.style.letterSpacing = inputStyle.letterSpacing;
		}
	},
	updateInputWidth () {
		if (!this.isMounted() || typeof this.refs.sizer.scrollWidth === 'undefined') {
			return;
		}
		let newInputWidth;
		if (this.props.placeholder) {
			newInputWidth = Math.max(this.refs.sizer.scrollWidth, this.refs.placeholderSizer.scrollWidth) + 2;
		} else {
			newInputWidth = this.refs.sizer.scrollWidth + 2;
		}
		if (newInputWidth < this.props.minWidth) {
			newInputWidth = this.props.minWidth;
		}
		if (newInputWidth !== this.state.inputWidth) {
			this.setState({
				inputWidth: newInputWidth
			});
		}
	},
	getInput () {
		return this.refs.input;
	},
	focus () {
		this.refs.input.focus();
	},
	blur () {
		this.refs.input.blur();
	},
	select () {
		this.refs.input.select();
	},
	render () {
		const sizerValue = (this.props.defaultValue || this.props.value || '');
		const wrapperStyle = this.props.style || {};
		if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';
		const inputStyle = Object.assign({}, this.props.inputStyle);
		inputStyle.width = this.state.inputWidth + 'px';
		inputStyle.boxSizing = 'content-box';
		const placeholder = this.props.placeholder ? <div ref="placeholderSizer" style={sizerStyle}>{this.props.placeholder}</div> : null;
		return (
			<div className={this.props.className} style={wrapperStyle}>
				<input {...this.props} ref="input" className={this.props.inputClassName} style={inputStyle} />
				<div ref="sizer" style={sizerStyle}>{sizerValue}</div>
				{placeholder}
			</div>
		);
	}
});

module.exports = AutosizeInput;
