import { createContext, useState, useContext, useEffect } from 'react'
import { auth } from './Firebase'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'

const AuthProvider = createContext()

export const useAuth = () => {
  useContext(AuthProvider)
}

export function AuthContext() {
  const [currentUser, setCurrentUser] = useState()

  const signUp = (auth, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const login = (auth, email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }
  const resetPassword = (auth, email) => {
    return sendPasswordResetEmail(auth, email)
  }
  const googleSignin = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  return { currentUser, signUp, login, logOut, resetPassword, googleSignin }
}
