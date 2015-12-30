var config = require('./config'), //archivo de config según el entorno
  express = require('express'),
  morgan = require('morgan'),
  compress = require('compression'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  session = require('express-session');

module.exports = function() {
  var app = express();

  //Usamos módulos según el entorno.
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')); //logger
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress()); //compresión.
  }

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret //secret obtenido del archivo de config
  }));

  app.set('views', './app/views'); //seateamos la carpeta de views
  app.set('view engine', 'ejs'); //seteamos el template engine

  require('../app/routes/index.server.routes.js')(app);
  
  //Middleware de express para servir archivos estáticos
  app.use(express.static('./public')); //carpeta public de donde los obtiene 

  return app;
};