define(['events',
        'class'],
function(Emitter, clazz) {
  
  function Href() {
    Emitter.call(this);
  }
  clazz.inherits(Href, Emitter);
  
  Href.prototype.back = function() {
  }
  
  Href.prototype.forward = function() {
  }
  
  Href.prototype.go = function(i) {
  }
  
  Href.prototype.push =
  Href.prototype.pushState = function(url) {
    window.location.href = url;
  }
  
  Href.prototype.replace =
  Href.prototype.replaceState = function(url) {
  }
  
  return new Href();
});
