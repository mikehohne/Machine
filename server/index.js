import test from './test';
import app from './app';
import * as firebase from 'firebase';


app.listen(process.env.DEVPORT, () => {
  console.log("listening on port " + process.env.DEVPORT)
})
