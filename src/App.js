//STARTING TESTING POSITION
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LoginPage from "./LoginPage";
// import LobbyPage from "./LobbyPage";
// import Parent from "./Parent";
// //import 'bootstrap/dist/css/bootstrap.min.css'

// export class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       jsonLobby: {},
//       jsonPlayer: {},
//     };
//   }

//   handleCallback = (jsonlobby, jsonplayer) => {
//     console.log(
//       "App::handleCallback::Recieved data: " +
//         JSON.stringify(jsonlobby) +
//         "\n" +
//         JSON.stringify(jsonplayer)
//     );
//     this.setState({ jsonLobby: jsonlobby });
//     this.setState({ jsonPlayer: jsonplayer });

//     console.log(
//       "App::handleCallback::Props: " +
//         JSON.stringify(this.props.jsonLobby) +
//         "\n\n" +
//         JSON.stringify(this.props.jsonPlayer)
//     );

//     console.log(
//       "App::handleCallback::Updated states: " +
//         "\n" +
//         JSON.stringify(this.state.jsonLobby) +
//         "\nPlayer: " +
//         JSON.stringify(this.state.jsonPlayer)
//     );

//     console.log(
//       "App::handleCallback::Props after updated states: " +
//         JSON.stringify(this.props.jsonLobby) +
//         "\n\n" +
//         JSON.stringify(this.props.jsonPlayer)
//     );
//   };

//   render() {
//     console.log("App::render...");
//     return <Parent></Parent>;
//   }
// }

// export default App;

//(done)
//https://towardsdatascience.com/passing-data-between-react-components-parent-children-siblings-a64f89e24ecf
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Parent from "./Parent";
//import 'bootstrap/dist/css/bootstrap.min.css'

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Parent />
      </Router>
    );
  }
}
export default App;
