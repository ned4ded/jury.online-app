const gulp = require('gulp');
const fs = require('fs');
const config = require('../gulpfile.config');
const nunjucksRender = require('gulp-nunjucks-render');

module.exports = (browserSync) => gulp.task('render', function() {
  const envHooks = [
    env => env.addFilter('typeOf', function(el) {
      const type = typeof el;
      
      const getType = (t) => {
        if(t == 'object') {

          return el instanceof Array ? 'array' : 'object';
        }

        return t;
      }

      return getType(type);
    }),
  ]

  const dir = 'datasets';

  const data = fs.readdirSync( dir ).reduce( (acc, fileName) => {
    return { ...acc, [fileName] : require('../' + dir + '/' + fileName) };
  }, {});

  return gulp.src('src/pages/*.+(html|njk)')
    .pipe(nunjucksRender({
      data: {
        datasets: data,
      },
      path: ['src/pages/templates'],
      manageEnv: function(env) {
        return envHooks.forEach(fn => fn(env));
      },
    }))
    .pipe(gulp.dest('www/'))
    .pipe(browserSync.stream());
});
