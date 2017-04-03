// ===================================================
// IMPORTANT: only for production
// total.js - web application framework for node.js
// http://www.totaljs.com
// ===================================================

var fs = require('fs');
var options = {};
options.ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
options.port = parseInt(process.env.OPENSHIFT_NODEJS_PORT) || 8000;
// options.config = { name: 'total.js' };
// options.https = { key: fs.readFileSync('keys/agent2-key.pem'), cert: fs.readFileSync('keys/agent2-cert.pem')};
// options.sleep = 2000;

/**
 * Release notes:
 */

require('total.js').http('release', options);
// require('total.js').https('release', options);