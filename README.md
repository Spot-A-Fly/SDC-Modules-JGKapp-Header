# Spot-A-Fly - Header Microservice

A clone of the Spotify artist page.

![](SpotaflyDemo.gif)

## Getting Started

Clone this repository from by running:
`git clone https://github.com/Spot-A-Fly/SDC-Modules-JGKapp-Header.git`

### Prerequisites

Node.js
npm

### Installing

Install all dependencies.
Seed database.
Run server.

```
npm install
npm run seed-db
npm start
```

Navigate to http://localhost:3001 to visit the Spot-A-Fly header service.

## Running the tests

`npm run test`

## Deployment

Use `docker-compose up -d` to get the containers up and running. Then run `docker exec -it sdc-modules-jgkapp-header-server npm run seed-db`.

## Built With

* [PostgreSQL](https://www.postgresql.org/)
* [Express.js](https://expressjs.com/)
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Jest](https://jestjs.io/)
* [react-testing-library](https://github.com/testing-library/react-testing-library)

## Authors

* **Joel Kapp** - [GitHub](https://github.com/JGKapp24)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
