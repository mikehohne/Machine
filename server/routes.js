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
import customerController from './controllers/customerController';
import orderController from './controllers/orderController';
import productController from './controllers/productController';
import contactController from './controllers/contactController';
import cartController from './controllers/cartController';



//Basic Routes
routes.get('/', basicController.getAvatar);

//User Routes
routes.post('/signup', userController.post);
routes.get('/logincheck', userController.getLoggedInUser);
routes.post('/signin', userController.signIn);

//Customer Routes
routes.post('/customer', customerController.post);

//Contact Routes
routes.post('/customer/contacts', contactController.post)
routes.get('/customer/contacts', contactController.getAll)

//Order Routes
routes.post('/cart/order', orderController.post)

//Cart Routes
routes.post('/cart/', cartController.post)
routes.get('/cart', cartController.getAll)

//Product Routes
routes.post('/product', productController.post)





export default routes;