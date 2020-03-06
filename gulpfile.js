const gulp = require('gulp'),
    path = require('path'),
    clean = require('gulp-clean'),
    runSequence = require('run-sequence'),
    config = {
        paths: {
            src: process.cwd() + path.sep + 'src' + path.sep + '**',
            dist: process.cwd() + path.sep + 'dist' 
        }
    },
    srcPath = config.paths.src,
    distPath = config.paths.dist;


gulp.task('copy', function() {
    return gulp.src(srcPath)
        .pipe(gulp.dest(distPath));
});

gulp.task('clean', function(done) {
    return gulp.src(distPath, {read: false})
        .pipe(clean());
});

gulp.task('build', function(done) {
    return runSequence('clean',
                'copy',
                done)
});

gulp.task('help', function() {
    console.log('Run gulp build to build the app');
})

gulp.task('default', ['help']);