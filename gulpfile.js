var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task("Hello", (done) => {
    console.log("Hello");
    done();
});

gulp.task('browserSync', function (done) {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    });
    done();
});

gulp.task('watch', function(done){
    gulp.watch('app/js/*.js', browserSync.reload);
    done();
});

gulp.task('default', gulp.series('browserSync', 'watch', function (done) {
    done();
}));