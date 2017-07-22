React-Input-Autosize
====================

A text input for [React](http://facebook.github.io/react/index.html) that resizes itself to the current content.


## Demo & Examples

Live demo: [jedwatson.github.io/react-input-autosize](http://jedwatson.github.io/react-input-autosize/)

To run the examples locally, run:

```
npm install
gulp dev
```

Then open [localhost:8000](http://localhost:8000) in a browser. This will also watch for file changes and rebuild the examples (includes live reload).

To just build the examples without the dev server or watch tasks, instead run:

```
gulp build-examples
```


## Installation

The easiest way to use React-Input-Autosize is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), etc).

You can also use the standalone build by including `dist/AutosizeInput.js` in your page. If you use this, make sure you have already included React and Underscore. (they must be available through a browserify-style `require()` call, standalone support is coming soon)

```
npm install react-input-autosize --save
```


## Usage

React-Input-Autosize generates an input field, wrapped in a `<div>` tag so it can detect the size of its value. Otherwise it behaves very similarly to a standard React input.


```es6
var AutosizeInput = require('react-input-autosize');

<AutosizeInput
	name="form-field-name"
	value={inputValue}
	onChange={function(event) {
		// event.target.value contains the new value
	}}
/>
```

## Gotchas

### Custom font sizes
If your input uses custom font sizes, you will need to provide the custom size to `AutosizeInput`.

```es6
<AutosizeInput
	name="form-field-name"
	value={inputValue}
	style={{ fontSize: 36 }}
	onChange={function(event) {
		// event.target.value contains the new value
	}}
/>
```

### Uncontrolled input
`AutosizeInput` requires to be a [controlled input](https://facebook.github.io/react/docs/forms.html#controlled-components) for the autosizing to work - it depends on `value` to work as intended.

## License

Copyright (c) 2017 Jed Watson. [MIT](LICENSE) License.
