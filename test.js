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

  var addBlock = function(type, name, func) {
    var blockLength = descriptor.blocks.length;
    var blockName = 'function_' + blockLength;
    ext[blockName] = function() { func() }
    descriptor.blocks.push(type, name, blockName);
  }

  var refresh = function(ext) {
    ScratchExtensions.unregister('kvaxtension: Test...');
    ScratchExtensions.register('kvaxtension: Test...', descriptor, ext);
  }

  addBlock('R', 'test!', function() {
    return 'Test!';
  })
  
  ext.refresh();
})({});
