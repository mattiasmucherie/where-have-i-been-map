import React from "react";
import "./App.css";
import Map from "./components/Map";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";

import "firebase/auth";
import firebaseApp from "./firebaseConfig";

class App extends React.Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    return (
      <div className="App">
        {user ? <p>Hello {user.displayName}</p> : <p>Please sign in</p>}
        {user ? (
          <button onClick={signOut}>Sign out</button>
        ) : (
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        )}
        {user ? <Map uid={user.uid} /> : <p>Loading</p>}
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({ providers, firebaseAppAuth })(App);
