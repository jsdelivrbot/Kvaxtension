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
        blocks: [ ], menus: { }
      };
 	}

  var addBlock = function(block) {
    descriptor.blocks.push(block);
  }

  addBlock(['R', 'test!', 'test'])
  var test = function() {
    return 'test!'
  }
  ScratchExtensions.register("kvaxtension: Test...", descriptor, ext);
})({});
