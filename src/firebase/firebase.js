const config = {
  apiKey: 'AIzaSyC4pkn1wm3UT7duRnzKXdv4C7Brux7_NDs',
  authDomain: 'wework-731bf.firebaseapp.com',
  databaseURL: 'https://wework-731bf.firebaseio.com',
  projectId: 'wework-731bf',
  storageBucket: 'wework-731bf.appspot.com',
  messagingSenderId: '1065680436892'
};

firebase.initializeApp(config);

window.userSesion = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      window.location.href = "../../src/views/wall-admin.html"
    }
  });
}

window.loginAdmin = (email, pass) => {
  return firebase.auth().signInWithEmailAndPassword(email, pass)
}

window.logoutAdmin = () => {
  firebase.auth().signOut().then(function() {
    window.location.href = "../"
  });
}