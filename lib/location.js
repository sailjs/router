define(['exports',
        'history',
        './location/href'],
function(exports, history, href) {
  
  exports.create = function() {
    return history;
    //return href;
  }
  
});
