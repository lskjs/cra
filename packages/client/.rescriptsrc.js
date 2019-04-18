module.exports = config => {
  config.optimization.splitChunks.name = true;
  return config;
};