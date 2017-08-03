# Advanced React Course

Based on Udemy course at: https://www.udemy.com/react-redux-tutorial/

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Authentication

### Server

We use a Node backend and MongoDB with Mongoose as DB.

- The server files are located under `/server`.
- Start Mongo locally by running `mongod`
- Start the server service and client bundling by running `yarn run dev` (default port for server is 3090, client code is served at 3000)

### API

- `/users` - get list of registered users (protected route, needs auth)
- `/signup` - create a new user
- `/signin` - authenticate an existing user