import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC2ccHn0o2vf2IoHyzIUx3bKBucYkgJj4I',
  authDomain: 'mobuy-web-app.firebaseapp.com',
  projectId: 'mobuy-web-app',
  storageBucket: 'mobuy-web-app.appspot.com',
  messagingSenderId: '704377276206',
  appId: '1:704377276206:web:1ea3b76bcec6ae46d9dcbf',
  measurementId: 'G-LD54XYH9JZ',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
