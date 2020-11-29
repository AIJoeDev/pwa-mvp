import firebase from 'firebase/app'
import { isNil } from 'lodash'

import store from '@/store'

firebase.auth().useEmulator('http://localhost:9099/')

firebase.auth().onAuthStateChanged(firebaseUser => {
  const actionToDispatch = isNil(firebaseUser) ? 'logout' : 'login'
  store.dispatch(`authentication/${actionToDispatch}`, firebaseUser)
})
