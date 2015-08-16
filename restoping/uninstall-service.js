var Service = require('node-windows').Service;

var scriptPath = process.argv[2]
var serviceName = process.argv[3]

// Create a new service object
var svc = new Service({
  name:serviceName,
  description: 'This is a node.js restoping site instance.',
  script: scriptPath
});

// Listen for the "uninstall" event so we know when it's done.
svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
});

svc.uninstall();
