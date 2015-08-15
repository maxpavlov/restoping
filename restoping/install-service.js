var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Restoping',
  description: 'This is a node.js restoping site instance.',
  script: '.\\bin\\www'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();
