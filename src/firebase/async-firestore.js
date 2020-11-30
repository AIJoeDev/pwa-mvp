import firebase from 'firebase/app'
import { isNil } from 'lodash'

let asyncFirestore = null

// Lazy load firestore with async import is important for performance

export default () => {
  if (isNil(asyncFirestore)) {
    asyncFirestore = import(/* webpackChunkName: "chunk-firestore" */ 'firebase/firestore').then(
      () => {
        if (window.location.hostname === 'localhost') {
          firebase.firestore().settings({ ssl: false })
          firebase.firestore().useEmulator('localhost', 8080)
        }
        firebase.firestore().enablePersistence({ synchronizeTabs: true })
        return firebase.firestore()
      }
    )
  }
  return asyncFirestore
}
