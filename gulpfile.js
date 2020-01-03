gulp = require("gulp");
concat = require("gulp-concat");
stripCssComments = require("gulp-strip-css-comments");
whitespace = require("gulp-whitespace");
removeEmptyLines = require('gulp-remove-empty-lines');

gulp.task("functions", function() {
  return gulp
    .src("./src/functions/**/*.scss")
    .pipe(concat("a_functions.scss"))
    .pipe(gulp.dest("./scripts/build/"))
});

gulp.task("variables", function() {
  return gulp
    .src("./src/variables/**/*.scss")
    .pipe(concat("b_variables.scss"))
    .pipe(gulp.dest("./scripts/build/"))
});

gulp.task("mixins", function() {
  return gulp
    .src("./src/mixins/**/*.scss")
    .pipe(concat("c_mixins.scss"))
    .pipe(gulp.dest("./scripts/build/"))
});

gulp.task("index", function() {
  return gulp
    .src("./scripts/build/*.scss")
    .pipe(concat("index.scss"))
    .pipe(stripCssComments())
    .pipe(removeEmptyLines({
      removeComments: true
    }))
    .pipe(whitespace({
      spacesToTabs: 4,
      removeTrailing: true
    }))
    .pipe(gulp.dest("./"));
});

var npmVersion = require('gulp-npm-version');
 
gulp.task('npm-version', function() {
  return gulp.src('./package.json')
    .pipe(npmVersion());
});
