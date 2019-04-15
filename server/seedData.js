const fetch = require('node-fetch');
const db = require('../database/index.js');

db.collection.dropDatabase();

// Return array of 100 promises after call to img API
const generateImagePromises = () => {
  const imageWidth = 1080;
  const imageHeight = 720;
  const collectionID = 2290052;
  const limit = 99;
  const promiseArr = [];

  for (let i = 0; i < limit; i += 1) {
    const randomNum = Math.floor(Math.random() * 151);
    const imgURL = `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNum}`;
    promiseArr.push(fetch(imgURL));
  }
  return promiseArr;
};

// Return single promise after API call for 100 names
const generateNamePromise = () => {
  const nameURL = 'https://randomuser.me/api/?results=99';
  return fetch(nameURL);
};

// Mutates and saves API promise res to mongo database
const seedData = () => {
  const images = generateImagePromises();
  const imagesArray = [];
  const namesArray = [];
  const seedObjectsArray = [];
  const demoObj = { name: 'Djay Van Der Bent', header_img: 'https://images.unsplash.com/photo-1530521787020-1c92aaf87aa3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1360&q=80'  }
  db.save(demoObj);
  
  Promise.all(images)
    .then(data => data.map(element => element.url))
    .then(arr => imagesArray.push(arr.slice()))
    .then(() => generateNamePromise())
    .then(result => result.json())
    .then(data => data.results.map(element => `${element.name.first} ${element.name.last}`))
    .then(arr => namesArray.push(arr.slice()))
    .then(() => {
      for (let i = 0; i < namesArray[0].length; i += 1) {
        seedObjectsArray.push({ name: namesArray[0][i], header_img: imagesArray[0][i] })
      }
    })
    .then(() => seedObjectsArray.forEach(obj => db.save(obj)))
};

// Call function to save
seedData();
