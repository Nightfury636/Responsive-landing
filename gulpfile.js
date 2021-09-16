'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles'));
};

exports.buildStyles = buildStyles;
exports.build = function () {
    gulp.series(['buildStyles']);
};

exports.watch = function () {
    return gulp.watch('./src/styles/**/*.scss', gulp.series(['buildStyles']));
};



<script>
// When the user clicks on <div>, open the popup
    function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
</script>