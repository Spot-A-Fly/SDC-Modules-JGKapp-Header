/* eslint-disable no-param-reassign */
module.exports = {
  getRandomId: (context, events, done) => {
    context.vars.id = Math.floor(Math.random() * 10000000);
    return done();
  },
};
