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

## License

Copyright (c) 2017 Jed Watson. [MIT](LICENSE) License.
