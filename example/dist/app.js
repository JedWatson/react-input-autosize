require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var AutosizeInput = require('react-input-autosize');

var App = React.createClass({
	displayName: 'App',

	getInitialState: function getInitialState() {
		return {
			value1: '',
			value2: 'example',
			value3: ''
		};
	},
	updateInputValue: function updateInputValue(input, event) {
		var newState = {};
		newState[input] = event.target.value;
		this.setState(newState);
	},
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h3',
				null,
				'Simple example:'
			),
			React.createElement(AutosizeInput, {
				value: this.state.value1,
				onChange: this.updateInputValue.bind(this, 'value1')
			}),
			React.createElement(
				'h3',
				null,
				'Styled example with default value:'
			),
			React.createElement(AutosizeInput, {
				value: this.state.value2,
				onChange: this.updateInputValue.bind(this, 'value2'),
				style: { background: '#eee', borderRadius: 5, padding: 5 },
				inputStyle: { border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }
			}),
			React.createElement(
				'h3',
				null,
				'Input with placeholder:'
			),
			React.createElement(AutosizeInput, {
				placeholder: 'Placeholder',
				value: this.state.value3,
				onChange: this.updateInputValue.bind(this, 'value3'),
				style: { background: '#eee', borderRadius: 5, padding: 5 },
				inputStyle: { border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }
			})
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-input-autosize":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYW5zb25rYW8vU2l0ZXMvZ2l0aHViL3JlYWN0LWlucHV0LWF1dG9zaXplL2V4YW1wbGUvc3JjL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNwQyxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7QUFFcEQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzNCLGdCQUFlLEVBQUUsMkJBQVc7QUFDM0IsU0FBTztBQUNOLFNBQU0sRUFBRSxFQUFFO0FBQ1YsU0FBTSxFQUFFLFNBQVM7QUFDakIsU0FBTSxFQUFFLEVBQUU7R0FDVixDQUFDO0VBQ0Y7QUFDRCxpQkFBZ0IsRUFBRSwwQkFBUyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ3hDLE1BQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNsQixVQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDckMsTUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztFQUN4QjtBQUNELE9BQU0sRUFBRSxrQkFBVztBQUNsQixTQUNDOzs7R0FDQzs7OztJQUF3QjtHQUN4QixvQkFBQyxhQUFhO0FBQ2IsU0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxBQUFDO0FBQ3pCLFlBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQUFBQztLQUNwRDtHQUNGOzs7O0lBQTJDO0dBQzNDLG9CQUFDLGFBQWE7QUFDYixTQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEFBQUM7QUFDekIsWUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxBQUFDO0FBQ3JELFNBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEFBQUM7QUFDM0QsY0FBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEFBQUM7S0FDbkY7R0FDRjs7OztJQUFnQztHQUNoQyxvQkFBQyxhQUFhO0FBQ2IsZUFBVyxFQUFDLGFBQWE7QUFDekIsU0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxBQUFDO0FBQ3pCLFlBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQUFBQztBQUNyRCxTQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxBQUFDO0FBQzNELGNBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxBQUFDO0tBQ25GO0dBQ0csQ0FDTDtFQUNGO0NBQ0QsQ0FBQyxDQUFDOztBQUVILFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQUMsR0FBRyxPQUFHLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBBdXRvc2l6ZUlucHV0ID0gcmVxdWlyZSgncmVhY3QtaW5wdXQtYXV0b3NpemUnKTtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWUxOiAnJyxcblx0XHRcdHZhbHVlMjogJ2V4YW1wbGUnLFxuXHRcdFx0dmFsdWUzOiAnJ1xuXHRcdH07XG5cdH0sXG5cdHVwZGF0ZUlucHV0VmFsdWU6IGZ1bmN0aW9uKGlucHV0LCBldmVudCkge1xuXHRcdHZhciBuZXdTdGF0ZSA9IHt9O1xuXHRcdG5ld1N0YXRlW2lucHV0XSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGgzPlNpbXBsZSBleGFtcGxlOjwvaDM+XG5cdFx0XHRcdDxBdXRvc2l6ZUlucHV0XG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWUxfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUlucHV0VmFsdWUuYmluZCh0aGlzLCAndmFsdWUxJyl9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxoMz5TdHlsZWQgZXhhbXBsZSB3aXRoIGRlZmF1bHQgdmFsdWU6PC9oMz5cblx0XHRcdFx0PEF1dG9zaXplSW5wdXRcblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZTJ9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMudXBkYXRlSW5wdXRWYWx1ZS5iaW5kKHRoaXMsICd2YWx1ZTInKX1cblx0XHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kOiAnI2VlZScsIGJvcmRlclJhZGl1czogNSwgcGFkZGluZzogNSB9fVxuXHRcdFx0XHRcdGlucHV0U3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICM5OTknLCBib3JkZXJSYWRpdXM6IDMsIHBhZGRpbmc6IDMsIGZvbnRTaXplOiAxNCB9fVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8aDM+SW5wdXQgd2l0aCBwbGFjZWhvbGRlcjo8L2gzPlxuXHRcdFx0XHQ8QXV0b3NpemVJbnB1dFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUGxhY2Vob2xkZXJcIlxuXHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlM31cblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dFZhbHVlLmJpbmQodGhpcywgJ3ZhbHVlMycpfVxuXHRcdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZWVlJywgYm9yZGVyUmFkaXVzOiA1LCBwYWRkaW5nOiA1IH19XG5cdFx0XHRcdFx0aW5wdXRTdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgIzk5OScsIGJvcmRlclJhZGl1czogMywgcGFkZGluZzogMywgZm9udFNpemU6IDE0IH19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=
