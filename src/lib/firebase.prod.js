import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCI3EI5YiIAuBvMesBt9vLE7QV5R7BJ5fE",
    authDomain: "netflix-6485a.firebaseapp.com",
    databaseURL: "https://netflix-6485a.firebaseio.com",
    projectId: "netflix-6485a",
    storageBucket: "netflix-6485a.appspot.com",
    messagingSenderId: "807699612996",
    appId: "1:807699612996:web:8b8536f01a7cd963854311"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
