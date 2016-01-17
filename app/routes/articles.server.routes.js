var articles = require('../../app/controllers/articles.server.controller');

module.exports = function(app) {
  app.route('/api/articles')
     .get(articles.list)
     .post(articles.requiresLogin, articles.create);
  
  app.route('/api/articles/:articleId')
     .get(articles.read)
     .put(articles.requiresLogin, articles.hasAuthorization, articles.update)
     .delete(articles.requiresLogin, articles.hasAuthorization, articles.delete);

  app.param('articleId', articles.articleByID);
};