const db = require('./index.js');

describe('getArtist', () => {

  test('should return an object', () => {
    expect.assertions(1);
    return db.getArtist('5c9e8a06deeb8c28571e26a4').then((data) => {
      expect(typeof data).toBe('object');
    });
  });

  test('should return an object with a name property of marshall rose', () => {
    expect.assertions(1);
    return db.getArtist('5c9e8a06deeb8c28571e26a4').then((data) => {
      expect(data.name).toBe('marshall rose');
    });
  });

  test('should return an object with a specified header_img URL', () => {
    expect.assertions(1);
    return db.getArtist('5c9e8a06deeb8c28571e26a4').then((data) => {
      expect(data.header_img).toBe('https://images.unsplash.com/photo-1495205158103-52ffc6cb2967?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&h=720&fit=crop&ixid=eyJhcHBfaWQiOjF9');
    });
  });
});
