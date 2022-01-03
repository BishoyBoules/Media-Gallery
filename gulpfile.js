/* eslint-disable no-undef */
let http = require('http');

http.createServer(function (request, response) {
response.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin' : 'http://bishoy-test-domain.com:3000',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
});
response.end('Hello World\n');
}).listen(3000);
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const eslint = require('gulp-eslint');
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();


function style (){
    return gulp.src('sass/*.scss')
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(autoprefixer())
    .pipe(gulp.dest("css"));
}

function lint() {
    return (
        gulp
            .src(['js/*.js'])
            .pipe(eslint())
            .pipe(eslint.failOnError())
    );
}

function watch(){
    gulp.watch('css/*.css', style).on('change', browserSync.reload);
    gulp.watch('sass/*.scss', style).on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
  
      browserSync.init({
          server: './'
      });
}

exports.style = style;
exports.lint = lint;
exports.watch = watch;