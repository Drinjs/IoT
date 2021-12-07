const proxies = require('./proxies')

const proxy = proxies.reduce((res, { path, target='http://localhost:8081' })=> {
  res[path] = {
    target: target,
    secure: false,
    changeOrigin: true,
    headers: {
      Connection: 'keep-alive',
    }
  }
  return res;
}, {});

const https = false;

module.exports = {
  proxy,
  https
};
