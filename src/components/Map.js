import React from "react";
import BasicMap from "./BasicMap";
import firebaseApp from "../firebaseConfig";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfCountries: []
    };
  }
  componentDidMount() {
    const db = firebaseApp.firestore();
    const countriesRef = db.collection("users").doc(this.props.uid);
    countriesRef.get().then(doc => {
      this.setState({ listOfCountries: doc.data().countries });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        {this.state.listOfCountries.length !== 0 ? (
          <BasicMap countries={this.state.listOfCountries} />
        ) : (
          <p>Loading</p>
        )}
      </div>
    );
  }
}

export default Map;
