// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LoginPage from "./LoginPage";
// import LobbyPage from "./LobbyPage";
// //import 'bootstrap/dist/css/bootstrap.min.css'

// export class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       jsonLobby: {},
//       jsonPlayer: {},
//       loggedIn: false,
//     };
//   }

//   render() {
//     return <div>Data: {this.props.datafromparent}</div>;
//   }
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
//import 'bootstrap/dist/css/bootstrap.min.css'

export class LobbyPage extends React.Component {
  componentDidMount() {
    console.log("LobbyPage::componentDidMount " + this.props.dataFromParent);
  }

  componentDidUpdate() {
    console.log("LobbyPage::componentDidUpdate " + this.props.dataFromParent);
  }

  sendData = () => {
    this.props.parentCallback("Hello", "/WritingPhase");
  };

  render() {
    return (
      <div>
        The data from parent is:{this.props.dataFromParent}/
        <button className="ButtonChangeProps" onClick={this.sendData}>
          Click to go to WritingPhase
        </button>
      </div>
    );
  }
}

export default LobbyPage;
