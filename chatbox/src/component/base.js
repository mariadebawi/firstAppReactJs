import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB2uMwEK6rYTYQZxk3SIvDP0PhLZM37fIU",
    authDomain: "ionic3-edd5a.firebaseapp.com",
    databaseURL: "https://ionic3-edd5a.firebaseio.com",
});




const base = Rebase.createClass(firebase.database());

export { firebaseApp }

export default base;