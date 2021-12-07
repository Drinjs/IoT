const proxies = [
  {
    path: '/napi'
  },
  {
    path: '/gapi',
    target: 'http://127.0.0.1:3000'
  },
  {
    path: '/dapi',
    target: 'http://xx.xx.xx.xx:80'
  }
]

module.exports = proxies
