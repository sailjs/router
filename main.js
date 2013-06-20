define(['exports', 'module',
        './lib/router',
        './lib/route'],
function(exports, module, Router, Route) {
  
  exports = module.exports = new Router();  
  exports.Route = Route;
  
});
