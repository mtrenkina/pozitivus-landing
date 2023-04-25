import { createRequire } from "module";
const require = createRequire(import.meta.url);

import gulp from "gulp";
import plumber from "gulp-plumber";
import sourcemap from "gulp-sourcemaps";
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
import svgstore from "gulp-svgstore";
const svgmin = require("gulp-svgmin");
const sync = require("browser-sync").create();
const imagemin = require('gulp-imagemin');
const imageminOptipng = require('imagemin-optipng');
import imageminSvgo from 'imagemin-svgo';
import imageminMozjpeg from 'imagemin-svgo';
const webp = require('gulp-webp');

// Styles
export const styles = () => {
  return gulp
    .src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename('styles.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('build/css'))
    .pipe(sync.stream());
};

// Server
export const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build',
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

// Watcher
const watcher = () => {
  gulp.watch('source/less/**/*.less', gulp.series('styles'));
  gulp.watch('source/less/*.less', gulp.series('styles'));
  gulp.watch('build/*.html').on('change', sync.reload);
  gulp.watch('source/*.js').on('change', sync.reload);
};

// Sprite
export const sprite = () => {
  return gulp
    .src('source/img/sprite_icons/icon_*.svg')
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(
      svgmin({
        plugins: [
          {
          name: 'removeViewBox',
          parmas: {
            active: false,
          }},
          {
            name: 'cleanupIDs',
            parmas: {
              active: false,
          }}]
      })
    )
    .pipe(rename('sprite.min.svg'))
    .pipe(gulp.dest('build'));
};

// Images
export const images = () => {
  return gulp
    .src('source/img/**/*.{jpg,png,svg}')
    .pipe(
      imagemin([
        imageminOptipng({ optimizationLevel: 3 }),
        imageminSvgo(),
        imageminMozjpeg({ quality: 75, progressive: true }),
      ])
    )
    .pipe(gulp.dest('build/img'));
};

export const makeWebp = () => {
  return gulp
    .src('source/img/**/*.{jpg,png}')
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest('build/img'))
}

export default gulp.series(styles, server, watcher);
