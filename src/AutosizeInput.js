const React = require('react');

const sizerStyle = { position: 'absolute', top: 0, left: 0, visibility: 'hidden', height: 0, overflow: 'scroll', whiteSpace: 'pre' };

const AutosizeInput = React.createClass({
	propTypes: {
		className: React.PropTypes.string,               // className for the outer element
		defaultValue: React.PropTypes.any,               // default field value
		inputClassName: React.PropTypes.string,          // className for the input element
		inputStyle: React.PropTypes.object,              // css styles for the input element
		minWidth: React.PropTypes.oneOfType([            // minimum width for input element
			React.PropTypes.number,
			React.PropTypes.string,
		]),
		onAutosize: React.PropTypes.func,                // onAutosize handler: function(newWidth) {}
		onChange: React.PropTypes.func,                  // onChange handler: function(newValue) {}
		placeholder: React.PropTypes.string,             // placeholder text
		placeholderIsMinWidth: React.PropTypes.bool,     // don't collapse size to less than the placeholder
		style: React.PropTypes.object,                   // css styles for the outer element
		value: React.PropTypes.any,                      // field value
	},
	inputRef: function(el) {
		this.input = el;
	},
	placeHolderSizerRef: function(el) {
		this.placeHolderSizer = el;
	},
	sizerRef: function(el) {
		this.sizer = el;
	},
	getDefaultProps () {
		return {
			minWidth: 1,
		};
	},
	getInitialState () {
		return {
			inputWidth: this.props.minWidth,
		};
	},
	componentDidMount () {
		this.copyInputStyles();
		this.updateInputWidth();
	},
	componentDidUpdate (prevProps, prevState) {
		if (prevState.inputWidth !== this.state.inputWidth) {
			if (typeof this.props.onAutosize === 'function') {
				this.props.onAutosize(this.state.inputWidth);
			}
		}
		this.updateInputWidth();
	},
	copyInputStyles () {
		if (!this.isMounted() || !window.getComputedStyle) {
			return;
		}
		const inputStyle = this.input && window.getComputedStyle(this.input);
		if (!inputStyle) {
			return;
		}
		const widthNode = this.sizer;
		widthNode.style.fontSize = inputStyle.fontSize;
		widthNode.style.fontFamily = inputStyle.fontFamily;
		widthNode.style.fontWeight = inputStyle.fontWeight;
		widthNode.style.fontStyle = inputStyle.fontStyle;
		widthNode.style.letterSpacing = inputStyle.letterSpacing;
		if (this.props.placeholder) {
			const placeholderNode = this.placeHolderSizer;
			placeholderNode.style.fontSize = inputStyle.fontSize;
			placeholderNode.style.fontFamily = inputStyle.fontFamily;
			placeholderNode.style.fontWeight = inputStyle.fontWeight;
			placeholderNode.style.fontStyle = inputStyle.fontStyle;
			placeholderNode.style.letterSpacing = inputStyle.letterSpacing;
		}
	},
	updateInputWidth () {
		if (!this.isMounted() || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
			return;
		}
		let newInputWidth;
		if (this.props.placeholder && (!this.props.value || (this.props.value && this.props.placeholderIsMinWidth))) {
			newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
		} else {
			newInputWidth = this.refs.sizer.scrollWidth + 2;
		}
		if (newInputWidth < this.props.minWidth) {
			newInputWidth = this.props.minWidth;
		}
		if (newInputWidth !== this.state.inputWidth) {
			this.setState({
				inputWidth: newInputWidth,
			});
		}
	},
	getInput () {
		return this.input;
	},
	focus () {
		this.input.focus();
	},
	blur () {
		this.input.blur();
	},
	select () {
		this.input.select();
	},
	render () {
		const sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
			if (previousValue !== null && previousValue !== undefined) {
				return previousValue;
			}

			return currentValue;
		});

		const wrapperStyle = this.props.style || {};
		if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';
		const inputStyle = Object.assign({}, this.props.inputStyle);
		inputStyle.width = this.state.inputWidth + 'px';
		inputStyle.boxSizing = 'content-box';
		const inputProps = Object.assign({}, this.props);
		inputProps.className = this.props.inputClassName;
		inputProps.style = inputStyle;
		// ensure props meant for `AutosizeInput` don't end up on the `input`
		delete inputProps.inputClassName;
		delete inputProps.inputStyle;
		delete inputProps.minWidth;
		delete inputProps.placeholderIsMinWidth;
		return (
			<div className={this.props.className} style={wrapperStyle}>
				<input {...inputProps} ref={ this.inputRef } />
				<div ref={ this.sizerRef } style={sizerStyle}>{sizerValue}</div>
				{this.props.placeholder ? <div ref={ this.placeHolderSizerRef } style={sizerStyle}>{this.props.placeholder}</div> : null}
			</div>
		);
	},
});

module.exports = AutosizeInput;
