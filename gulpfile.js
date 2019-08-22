gulp = require("gulp");
concat = require("gulp-concat");

// the default task
gulp.task("a", function() {
  return gulp
    .src("./src/variables/**/*.scss")
    .pipe(concat("vars.scss"))
    .pipe(gulp.dest("./dist/"))
});

gulp.task("b", function() {
  return gulp
    .src("./src/**/*.scss")
    .pipe(concat("novars.scss"))
    .pipe(gulp.dest("./dist/"))
});


gulp.task("c", function() {
  return gulp
    .src("./dist/*vars.scss")
    .pipe(concat("all.scss"))
    .pipe(gulp.dest("./dist/"));
});

