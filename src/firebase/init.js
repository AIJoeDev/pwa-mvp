import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyC1MuNXQDeLeC3jP4YWzdvq-XvA3m4cpbQ',
  authDomain: 'ai-joe-mvp.firebaseapp.com',
  databaseURL: 'https://ai-joe-mvp.firebaseio.com',
  projectId: 'ai-joe-mvp',
  storageBucket: 'ai-joe-mvp.appspot.com',
  messagingSenderId: '690110000312',
  appId: '1:690110000312:web:de8298eaf6aa686e3e584d',
  measurementId: 'G-0YX9FY87DQ'
}

firebase.initializeApp(config)