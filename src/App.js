import React from "react";
import "./App.css";
import BasicMap from "./components/BasicMap";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const listOfCountries = [
  "Sweden",
  "France",
  "United Kingdom",
  "Canada",
  "Djibouti",
  "Australia",
  "Italy",
  "United States",
  "Mexico",
  "Brazil",
  "Norway",
  "Finland",
  "Belgium",
  "Netherlands",
  "Germany",
  "Morocco",
  "Egypt",
  "Croatia",
  "Spain",
  "Portugal",
  "Switzerland",
  "Austria",
  "Greece",
  "Japan",
  "Hong Kong",
  "Malaysia",
  "Singapore",
  "Bosnia and Herz.",
  "Dominican Rep."
];

class App extends React.Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    console.log(user);
    return (
      <div className="App">
        {user ? <p>Hello {user.displayName}</p> : <p>Please sign in</p>}
        {user ? (
          <button onClick={signOut}>Sign out</button>
        ) : (
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        )}
        <BasicMap countries={listOfCountries} />
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({ providers, firebaseAppAuth })(App);
