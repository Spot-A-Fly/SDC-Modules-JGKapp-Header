/* eslint-disable no-console */
const axios = require('axios');
const readline = require('readline');
const faker = require('faker');
const db = require('./artist.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Seed database
const seedArtists = (numRecords) => {
  const promises = [];
  // constants for imageURL
  const imageWidth = 1080;
  const imageHeight = 720;
  const collectionID = 2290052;

  for (let i = 0; i < numRecords; i += 1) {
    const newName = `${faker.name.prefix()} ${faker.name.findName()} : ${faker.name.title()}`;
    // const newName = axios.get('https://randomuser.me/api/')
    //   .then((results) => results.data.name);
    const newImgUrl = `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${Math.floor(Math.random() * 151)}`;

    const newPromise = Promise.all([newName, newImgUrl])
      .then(([name, imgUrl]) => {
        if (i % 100 === 0) {
          console.log(`Now serving artist number: ${i}`);
        }
        db.saveNewArtist({
          name,
          header_img: imgUrl,
        });
      })
      .catch((err) => {
        console.log(`Error processing record number ${i} where name: ${newName} and imgURL: ${newImgUrl}`);
        console.log(err);
      });

    promises.push(newPromise);
  }

  return Promise.all(promises);
};

const seedDemo = () => db.saveNewArtist({
  name: 'Djay Van Der Bent',
  header_img: 'https://images.unsplash.com/photo-1530521787020-1c92aaf87aa3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1360&q=80',
});


// Pose question to console log user
rl.question('How many primary records do you need? ', (answer) => {
  const numRecords = parseInt(answer, 10);
  if (numRecords) {
    // connection
    db.connectToDB();

    // Clear database
    db.dropDB()
      .then(seedDemo)
      .then(() => seedArtists(numRecords))
      .then(() => {
        console.log('Finished seeding database now exiting');
        process.exit();
      });
  } else {
    console.log('Please input a positive integer');
  }
});
