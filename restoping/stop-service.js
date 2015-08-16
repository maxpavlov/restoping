var Service = require('node-windows').Service;

var serviceName = process.argv[2]

// Create a new service object
var svc = new Service({
  name:serviceName,
  description: 'This is a node.js restoping site instance.',
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('stop',function(){
  console.log('Service stopped.');
});

svc.stop();
