/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main dev build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build:browser');
});

/**
 *  Default task clean temporaries directories and launch the
 *  main deploy build task
 */

gulp.task('emulate', ['clean'], function () {
    gulp.start('build:emulator');
});
