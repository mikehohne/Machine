import express from 'express';
import * as firebase from 'firebase';

const routes = express();


var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTHDOMAIN + ".firebaseapp.com",
    databaseURL: process.env.DBNAME + ".firebaseio.com",
    storageBucket: process.env.STORAGEBUCKET + ".appspot.com",
  };
  firebase.initializeApp(config);

//Controller Imports
import basicController from './controllers/basicController';
import userController from './controllers/userController';

//Basic Routes
routes.get('/', basicController.getAvatar);

//User Routes
routes.post('/signup', userController.post);
routes.get('/login', userController.getLoggedInUser);
routes.post('/signin', userController.signIn);




export default routes;