module.exports = (api) => {
  const env = api.env();
  api.cache.never();

  const plugins = ['@babel/plugin-proposal-class-properties'];

  if (env === 'development') {
    /* plugins.push('pluginName'); */
  }

  return {
    presets: [
      [
        '@babel/env', {
          debug: false,
          spec: true,
          loose: false,
          modules: false,
        }
      ]
    ],
    plugins,
  }
}