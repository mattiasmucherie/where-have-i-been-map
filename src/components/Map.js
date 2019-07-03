import React from "react";
import BasicMap from "./BasicMap";
import firebaseApp from "../firebase/index";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfCountries: [],
      arrayOfCountries: []
    };
  }
  componentDidMount() {
    const db = firebaseApp.firestore();
    const countriesRef = db.collection("users").doc(this.props.uid);
    countriesRef.onSnapshot(doc => {
      this.setState({ listOfCountries: doc.data().countries });
    });
    db.collection("data")
      .doc("countries")
      .get()
      .then(doc => {
        this.setState({ arrayOfCountries: doc.data().arrayOfCountries });
      });
  }
  render() {
    return (
      <div>
        {this.state.listOfCountries.length !== 0 ? (
          <BasicMap countries={this.state.listOfCountries} />
        ) : (
          <p>Loading Map</p>
        )}
      </div>
    );
  }
}

export default Map;
