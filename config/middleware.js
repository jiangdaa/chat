// 中间件

module.exports = (app) => {

  app.get('/', (req, res, next) => {
    res.redirect('/login/login');

  });

  app.use((req, res, next) => {


    next();
  });
}
