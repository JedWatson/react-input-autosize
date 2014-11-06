var browserify = require('browserify'),
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

var PACKAGE_NAME = require('./package.json').name;
var PACKAGE_FILE = 'AutoSizeInput.js';
var DEPENDENCIES = ['react'];

var SRC_PATH = './src';
var DIST_PATH = './dist';

var EXAMPLE_APP = './example/src/app.js';
var EXAMPLE_LESS = './example/src/app.less';
var EXAMPLE_FILES = ['./example/src/index.html'];
var EXAMPLE_DIST = './example/dist';


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

function buildExample(dev) {
	
	var dest = EXAMPLE_DIST;
	
	var opts = dev ? watchify.args : {};
	
	opts.debug = dev ? true : false;
	opts.hasExports = true;
	
	var common = browserify(opts),
		bundle = browserify(opts),
		example = browserify(opts);
	
	DEPENDENCIES.forEach(function(pkg) {
		common.require(pkg);
		bundle.exclude(pkg);
		example.exclude(pkg);
	});
	
	bundle.require(SRC_PATH + '/' + PACKAGE_FILE, { expose: PACKAGE_NAME });
	example.exclude(PACKAGE_NAME).add(EXAMPLE_APP);
	
	if (dev) {
		watchBundle(common, 'common.js', dest);
		watchBundle(bundle, 'bundle.js', dest);
		watchBundle(example, 'app.js', dest);
	}
	
	return merge(
		doBundle(common, 'common.js', dest),
		doBundle(bundle, 'bundle.js', dest),
		doBundle(example, 'app.js', dest)
	);
	
}


/**
 * Serve task for local development
 */

gulp.task('dev-server', function() {
	connect.server({
		root: 'example/dist',
		port: 8000,
		livereload: true
	});
});


/**
 * Example tasks
 */

gulp.task('prepare-examples', function(done) {
	del([EXAMPLE_DIST], done);
});

gulp.task('copy-example-files', ['prepare-examples'], function() {
	return gulp.src(EXAMPLE_FILES)
		.pipe(gulp.dest(EXAMPLE_DIST));
})

gulp.task('build-example-css', ['prepare-examples'], function() {
	return gulp.src(EXAMPLE_LESS)
		.pipe(less())
		.pipe(gulp.dest(EXAMPLE_DIST))
		.pipe(connect.reload());
});

gulp.task('build-examples', ['prepare-examples', 'build-example-css', 'copy-example-files'], function() {
	return buildExample();
});


/**
 * Development task
 */

gulp.task('dev', ['copy-example-files', 'build-example-css', 'dev-server'], function() {
	gulp.watch([EXAMPLE_FILES], ['copy-example-files']);
	gulp.watch([EXAMPLE_LESS], ['build-example-css']);
	return buildExample(true);
});


/**
 * Build task
 */

gulp.task('prepare-dist', function(done) {
	del([DIST_PATH], done);
});

gulp.task('build', ['prepare-dist'], function() {
	var dest = DIST_PATH;
	var bundle = browserify({ hasExports: true });
	DEPENDENCIES.forEach(function(pkg) {
		bundle.exclude(pkg);
	});
	bundle.require(SRC_PATH + '/' + PACKAGE_FILE, { expose: PACKAGE_NAME });
	return doBundle(bundle, PACKAGE_FILE, dest);
});


/**
 * Deploy task
 */

gulp.task('deploy', ['build-examples'], function() {
	return gulp.src(EXAMPLE_DIST + '/**/*').pipe(deploy());
});
