define(['./location'],
function(location) {
  
  function Router() {
    this._location = location.create();
  }
  
  Router.prototype.start = function() {
    console.log('Router.start');
    
    this._location.on('pathChange', this._onPathChange = function(url) {
      console.log('pathChange: ' + url);
    });
  }
  
  Router.prototype.stop = function() {
    this._location.off('pathChange', this._onPathChange);
  }
  
  Router.prototype.go = function(url) {
    this._location.pushState(url);
  }
  
  return Router;
});
