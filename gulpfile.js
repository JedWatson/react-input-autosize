var browserify = require('browserify'),
	shim = require('browserify-shim'),
	chalk = require('chalk'),
	del = require('del'),
	gulp = require('gulp'),
	connect = require('gulp-connect'),
	deploy = require("gulp-gh-pages"),
	less = require('gulp-less'),
	gutil = require('gulp-util'),
	merge = require('merge-stream'),
	reactify = require('reactify'),
	source = require('vinyl-source-stream'),
	watchify = require('watchify');


/**
 * Constants
 */

var SRC_PATH = 'src';
var DIST_PATH = 'dist';

var PACKAGE_NAME = require('./package.json').name;
var PACKAGE_FILE = 'AutosizeInput.js';
var STANDALONE_NAME = 'AutosizeInput';
var DEPENDENCIES = ['react'];

var EXAMPLE_DIST = 'example/dist';
var EXAMPLE_APP = 'example/src/app.js';
var EXAMPLE_LESS = 'example/src/app.less';
var EXAMPLE_FILES = [
	'example/src/index.html',
	'example/src/standalone.html'
];


/**
 * Bundle helpers
 */

function doBundle(target, name, dest) {
	return target.bundle()
		.on('error', function(e) {
			gutil.log('Browserify Error', e);
		})
		.pipe(source(name))
		.pipe(gulp.dest(dest))
		.pipe(connect.reload());
}

function watchBundle(target, name, dest) {
	return watchify(target)
		.on('update', function (scriptIds) {
			scriptIds = scriptIds
				.filter(function(i) { return i.substr(0,2) !== './' })
				.map(function(i) { return chalk.blue(i.replace(__dirname, '')) });
			if (scriptIds.length > 1) {
				gutil.log(scriptIds.length + ' Scripts updated:\n* ' + scriptIds.join('\n* ') + '\nrebuilding...');
			} else {
				gutil.log(scriptIds[0] + ' updated, rebuilding...');
			}
			doBundle(target, name, dest);
		})
		.on('time', function (time) {
			gutil.log(chalk.green(name + ' built in ' + (Math.round(time / 10) / 100) + 's'));
		});
}


/**
 * Prepare task for examples
 */

gulp.task('prepare:examples', function(done) {
	del([EXAMPLE_DIST], done);
});


/**
 * Build example files
 */

function buildExampleFiles() {
	return gulp.src(EXAMPLE_FILES)
		.pipe(gulp.dest(EXAMPLE_DIST))
		.pipe(connect.reload());
}

gulp.task('dev:build:example:files', buildExampleFiles);
gulp.task('build:example:files', ['prepare:examples'], buildExampleFiles);


/**
 * Build example css from less
 */

function buildExampleCSS() {
	return gulp.src(EXAMPLE_LESS)
		.pipe(less())
		.pipe(gulp.dest(EXAMPLE_DIST))
		.pipe(connect.reload());
}

gulp.task('dev:build:example:css', buildExampleCSS);
gulp.task('build:example:css', ['prepare:examples'], buildExampleCSS);


/**
 * Build example scripts
 * 
 * Returns a gulp task with watchify when in development mode
 */

function buildExampleScripts(dev) {
	
	var dest = EXAMPLE_DIST;
	
	var opts = dev ? watchify.args : {};
	opts.debug = dev ? true : false;
	opts.hasExports = true;
	
	return function() {
		
		var common = browserify(opts),
			bundle = browserify(opts).require('./' + SRC_PATH + '/' + PACKAGE_FILE, { expose: PACKAGE_NAME }),
			example = browserify(opts).exclude(PACKAGE_NAME).add('./' + EXAMPLE_APP),
			standalone = browserify('./' + SRC_PATH + '/' + PACKAGE_FILE, { standalone: STANDALONE_NAME })
				.transform(reactify)
				.transform(shim);
		
		DEPENDENCIES.forEach(function(pkg) {
			common.require(pkg);
			bundle.exclude(pkg);
			example.exclude(pkg);
			standalone.exclude(pkg);
		});
		
		if (dev) {
			watchBundle(common, 'common.js', dest);
			watchBundle(bundle, 'bundle.js', dest);
			watchBundle(example, 'app.js', dest);
			watchBundle(standalone, 'standalone.js', dest);
		}
		
		return merge(
			doBundle(common, 'common.js', dest),
			doBundle(bundle, 'bundle.js', dest),
			doBundle(example, 'app.js', dest),
			doBundle(standalone, 'standalone.js', dest)
		);
		
	}

};

gulp.task('dev:build:example:scripts', buildExampleScripts(true));
gulp.task('build:example:scripts', ['prepare:examples'], buildExampleScripts());


/**
 * Build examples
 */

gulp.task('build:examples', [
	'build:example:files',
	'build:example:css',
	'build:example:scripts'
]);

gulp.task('watch:examples', [
	'dev:build:example:files',
	'dev:build:example:css',
	'dev:build:example:scripts'
], function() {
	gulp.watch([EXAMPLE_FILES], ['dev:build:example:files']);
	gulp.watch([EXAMPLE_LESS], ['dev:build:example:css']);
});


/**
 * Serve task for local development
 */

gulp.task('dev:server', function() {
	connect.server({
		root: 'example/dist',
		port: 8000,
		livereload: true
	});
});


/**
 * Development task
 */

gulp.task('dev', [
	'dev:server',
	'watch:examples'
]);


/**
 * Build task
 */

gulp.task('prepare:dist', function(done) {
	del([DIST_PATH], done);
});

gulp.task('build:dist', ['prepare:dist'], function() {
	
	var standalone = browserify('./' + SRC_PATH + '/' + PACKAGE_FILE, {
			standalone: STANDALONE_NAME
		})
		.transform(reactify)
		.transform(shim);
	
	DEPENDENCIES.forEach(function(pkg) {
		standalone.exclude(pkg);
	});
	
	return doBundle(standalone, PACKAGE_FILE, DIST_PATH);
	
});

gulp.task('build', [
	'build:dist',
	'build:examples'
]);


/**
 * Deploy task
 */

gulp.task('deploy', ['build:examples'], function() {
	return gulp.src(EXAMPLE_DIST + '/**/*').pipe(deploy());
});
