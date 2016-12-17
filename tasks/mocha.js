import gulp from 'gulp';
import mocha from 'gulp-mocha';
import register from 'babel-register';

function onError() {
  this.emit('end');
}

export default () => {
  return gulp
    .src('test/**/*.js')
    .pipe(
      mocha({
        compilers: register
      })
      .on('error', onError)
    );
};
