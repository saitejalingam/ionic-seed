'use strict';

var path = require('path');
var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var conf = require('./conf');
var pkg = require('../package.json');

function injectConfigTask (env) {
    var now = new Date().toGMTString(),
        endPoints = pkg.config.END_POINTS[env];


    return gulp.src([path.join(conf.paths.generated, 'config.module.js')])
        .pipe(replace('VER', 'N/A', pkg.version))
        .pipe(replace('BUILD_DATE', 'N/A', now))
        .pipe(replace('API_END_POINT', '.', endPoints.API))
        .pipe(replace('OAUTH_END_POINT', '.', endPoints.OAUTH))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/generated')));
}

function replace(key, oldValue, newValue) {
    return $.replace(
        "'" + key + "': '" + oldValue + "'",
        "'" + key + "': '" + newValue + "'"
    );
}

gulp.task('configInjector:emulator', function () {
    return injectConfigTask('emulator');
});

gulp.task('configInjector:browser', function () {
    return injectConfigTask('browser');
});
