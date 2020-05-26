const db = require('../database/index.js');

describe('getArtist', () => {
  test('should return an object', () => {
    expect.assertions(1);
    return db.getArtist('demo').then((data) => {
      expect(typeof data).toBe('object');
    });
  });

  test('should return an object with a name property of marshall rose', () => {
    expect.assertions(1);
    return db.getArtist('demo').then((data) => {
      expect(data.name).toBe('Djay Van Der Bent');
    });
  });

  test('should return an object with a specified header_img URL', () => {
    expect.assertions(1);
    return db.getArtist('demo').then((data) => {
      expect(data.header_img).toBe('https://images.unsplash.com/photo-1530521787020-1c92aaf87aa3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1360&q=80');
      db.collection.close();
    });
  });
});
