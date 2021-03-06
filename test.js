(function(ext) {
  ext.name = 'kvaxtension: Test...'
  ext._shutdown = function() {
  };
  ext._getStatus = function() {
    return {status: 2, msg: 'Thanks for installing!'};
  };
  ext.installed = function() {
  	return(true);
  };
  ext.refresh = function() {
    ScratchExtensions.unregister(ext.name);
    ScratchExtensions.register(ext.name, descriptor, ext);
  }

  var descriptor = {
    blocks: [], menus: {}
  };

  var addBlock = function(block) {
    descriptor.blocks.push(block);
  }

  var refresh = function(ext) {
    ScratchExtensions.unregister('kvaxtension: Test...');
    ScratchExtensions.register('kvaxtension: Test...', descriptor, ext);
  }

  addBlock(['R', 'test!', 'test'])
  ext.test = function() {
    return 'Test';
  }
  ext.refresh();
})({});
