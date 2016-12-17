import gulp from 'gulp';
import watch from 'gulp-watch';

export default () => {
  watch('src/**/*.js', () => {
    gulp.start('build');
  });
  watch('test/**/*.js', () => {
    gulp.start('mocha');
  });
};
