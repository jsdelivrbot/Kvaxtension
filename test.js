(function(ext) {
  ext._shutdown = function() {
  };
  ext._getStatus = function() {
    return {status: 2, msg: 'Thanks for installing!'};
  };
  ext.installed = function() {
  	return(true);
  };

  var descriptor = {
    blocks: [], menus: {}
  };

  var addBlock = function(block) {
    descriptor.blocks.push(block);
  }

  var refreshExt = function() {
    ScratchExtensions.unregister('kvaxtension: Test...');
    ScratchExtensions.register('kvaxtension: Test...', descriptor, ext);
  }

  addBlock(['R', 'test!', 'test'])
  var test = function() {
    return 'test!'
  }
  refreshExt();
})({});
