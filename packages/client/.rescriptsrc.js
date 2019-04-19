const webpack = require('webpack');
const crypto = require('crypto');

module.exports = config => {
  config.plugins.push(new webpack.NamedChunksPlugin(function () {
    const usedIds = new Set()
    const defaultLen = 4;
    return function nameResolver(chunk) {
      const moduleIds = chunk.getModules().map(m => m.id).sort().join(';')
      const hash = crypto.createHash("sha256") // Like HashedModuleIdsPlugin
      hash.update(moduleIds)
      const hashId = hash.digest("hex")
      let len = defaultLen
      let resultId
      do {
        resultId = hashId.substr(0, len)
        len++
      } while (usedIds.has(resultId))
      usedIds.add(resultId)
      return resultId
    }
  }()));
  config.optimization.splitChunks.name = true;
  config.optimization.splitChunks.automaticNameDelimiter = '-';
  return config;
};