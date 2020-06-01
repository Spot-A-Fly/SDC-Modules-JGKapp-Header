/* eslint-disable no-param-reassign */
module.exports = {
  getRandomId: (context, events, done) => {
    context.vars.id = Math.floor(Math.random() * 10000000);
    return done();
  },
  getRandomIdInLastHalf: (context, events, done) => {
    context.vars.id = Math.floor(Math.random() * 5000000) + 5000000;
    return done();
  },
  getFrequentlyUsedId: (context, events, done) => {
    // Return one of 50 frequented Id's
    context.vars.id = Math.floor(10000000 / Math.floor((Math.random() * 50 + 1)));
    return done();
  },
};
