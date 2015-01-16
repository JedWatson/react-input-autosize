!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.AutosizeInput=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var sizerStyle = { position: "absolute", visibility: "hidden", height: 0, width: 0, overflow: "scroll", whiteSpace: "nowrap" };

var AutosizeInput = React.createClass({

  displayName: "AutosizeInput",

  propTypes: {
    value: React.PropTypes.any, // field value
    defaultValue: React.PropTypes.any, // default field value
    onChange: React.PropTypes.func, // onChange handler: function(newValue) {}
    style: React.PropTypes.object, // css styles for the outer element
    className: React.PropTypes.string, // className for the outer element
    inputStyle: React.PropTypes.object, // css styles for the input element
    inputClassName: React.PropTypes.string // className for the input element
  },

  getDefaultProps: function () {
    return {
      minWidth: 1
    };
  },

  getInitialState: function () {
    return {
      inputWidth: this.props.minWidth
    };
  },

  componentDidMount: function () {
    this.copyInputStyles();
    this.updateInputWidth();
  },

  componentDidUpdate: function () {
    this.updateInputWidth();
  },

  copyInputStyles: function () {
    if (!this.isMounted() || !window.getComputedStyle) {
      return;
    }
    var inputStyle = window.getComputedStyle(this.refs.input.getDOMNode());
    var widthNode = this.refs.sizer.getDOMNode();
    widthNode.style.fontSize = inputStyle.fontSize;
    widthNode.style.fontFamily = inputStyle.fontFamily;
  },

  updateInputWidth: function () {
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

  getInput: function () {
    return this.refs.input;
  },

  focus: function () {
    this.refs.input.getDOMNode().focus();
  },

  select: function () {
    this.refs.input.getDOMNode().select();
  },

  render: function () {
    var nbspValue = (this.props.value || "").replace(/ /g, "&nbsp;");

    var wrapperStyle = this.props.style || {};
    wrapperStyle.display = "inline-block";

    var inputStyle = this.props.inputStyle || {};
    inputStyle.width = this.state.inputWidth;

    return React.createElement(
      "div",
      { className: this.props.className, style: wrapperStyle },
      React.createElement("input", React.__spread({}, this.props, { ref: "input", className: this.props.inputClassName, style: inputStyle })),
      React.createElement("div", { ref: "sizer", style: sizerStyle, dangerouslySetInnerHTML: { __html: nbspValue } })
    );
  }

});

module.exports = AutosizeInput;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});