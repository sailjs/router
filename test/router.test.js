define(['router'],
function(router) {

  describe("router", function() {
    
    it('shoud export Route constructor', function() {
      expect(router.Route).to.exist;
      expect(router.Route).to.be.a('function');
    });
    
  });
  
  return { name: "test.router" }
});
