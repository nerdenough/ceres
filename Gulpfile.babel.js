import gulp from 'gulp';
import { eslint, mocha, babel, watch } from './tasks';

gulp.task('eslint', eslint);
gulp.task('mocha', mocha);
gulp.task('build', ['eslint', 'mocha'], babel);
gulp.task('watch', ['build'], watch);
gulp.task('default', ['watch']);
