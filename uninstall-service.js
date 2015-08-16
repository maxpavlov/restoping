var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Restoping',
  description: 'This is a node.js restoping site instance.',
  script: '.\\bin\\www'
});

// Listen for the "uninstall" event so we know when it's done.
svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
});

svc.on('stop',function(){
	// Uninstall the service.
	svc.uninstall();
});

svc.stop();
