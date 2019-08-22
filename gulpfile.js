gulp = require("gulp");
concat = require("gulp-concat");
stripCssComments = require("gulp-strip-css-comments");
whitespace = require("gulp-whitespace");
removeEmptyLines = require('gulp-remove-empty-lines');

gulp.task("reset", function() {
  return gulp
    .src("./src/reset.scss")
    .pipe(concat("a_reset.scss"))
    .pipe(gulp.dest("./scripts/build/"))
});

gulp.task("functions", function() {
  return gulp
    .src("./src/functions/**/*.scss")
    .pipe(concat("b_functions.scss"))
    .pipe(gulp.dest("./scripts/build/"))
});

gulp.task("variables", function() {
  return gulp
    .src("./src/variables/**/*.scss")
    .pipe(concat("c_variables.scss"))
    .pipe(gulp.dest("./scripts/build/"))
});

gulp.task("mixins", function() {
  return gulp
    .src("./src/mixins/**/*.scss")
    .pipe(concat("d_mixins.scss"))
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
