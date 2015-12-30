exports.render = function(req, res) {
  //Testeamos session. Se ve en la consola levantada.
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }
  req.session.lastVisit = new Date();

  // renderizamos con el EJS engine. Le pasamos la view y las variables.
  res.render('index', {
    title: 'Hello World'
  });
};