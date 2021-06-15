module.exports = function (context, options) {
    return {
      name: 'custom-webpack',
      configureWebpack(config, isServer, utils) {
        return {
          resolve: {
            fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": require.resolve("path-browserify"),
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            } 
          },
        };
      },
    };
  };