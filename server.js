
if (serverOptions.server === 'apollo') {
  const startApollo = require('./bin/apollo').startServer;
  startApollo(app, serverOptions, {
    http: http,
    httpServer: httpServer,
    https: https,
    httpsServer: httpsServer,
  });
  //return
}
