const Redis = require('ioredis');
const config = require('../../config.js');

const redis = new Redis(config.cache);

redis.config('SET', 'maxmemory', '200mb')
  .then(() => redis.config('SET', 'maxmemory-policy', 'allkeys-lru'));

const addToCache = (key, value) => redis.set(key, JSON.stringify(value));

const retrieveFromCache = (key) => redis.get(key)
  .then(JSON.parse);

module.exports = {
  addToCache,
  retrieveFromCache,
};
