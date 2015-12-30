//Levantamos la configuración correspondiente según el entorno
module.exports = require('./env/' + process.env.NODE_ENV + '.js');