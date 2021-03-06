var Service = require('node-windows').Service;

var scriptPath = process.argv[2]
var serviceName = process.argv[3]

// Create a new service object
var svc = new Service({
  name:serviceName,
  description: 'This is a node.js restoping site instance.',
  script: scriptPath
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();
