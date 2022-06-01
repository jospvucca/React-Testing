// STARTING TESTING POSITION
// import React from "react";
// import LobbyPage from "./LobbyPage";
// import { Navigate, Link, Router } from "react-router-dom";

// class LoginPage extends React.Component {
//   //Constructor
//   constructor(props) {
//     super(props);
//     this.state = {
//       lobbyCode: "",
//       username: "",
//       loggedIn: false,
//       path: "/",
//       jsonLobby: {},
//       jsonPlayer: {},
//     };
//   }

//   lobby = {
//     _Id: "820507bb-72d9-4c64-9321-eab9c7711183",
//     _SignalRGroup: "ECkH",
//     _SignalRConnectionId: "F8mE1AF2nfTZ204aV8WBvQ",
//     _State: "NEW",
//     _Date: "2022-05-17T22:16:57.379042",
//     _Players: [
//       {
//         _Id: "adc85d09-4b78-49ec-b3e9-564b7df82b8f",
//         _Username: "gag",
//         _SignalRConnectionId: null,
//         _Character: "NOT_SELECTED",
//         _Team: "NOT_SELECTED",
//         _LobbyId: "820507bb-72d9-4c64-9321-eab9c7711183",
//         _IsFirst: false,
//         _Words: [],
//       },
//     ],
//   };

//   player = {
//     _Id: "adc85d09-4b78-49ec-b3e9-564b7df82b8f",
//     _Username: "gag",
//     _SignalRConnectionId: null,
//     _Character: "NOT_SELECTED",
//     _Team: "NOT_SELECTED",
//     _LobbyId: "820507bb-72d9-4c64-9321-eab9c7711183",
//     _IsFirst: false,
//     _Words: [],
//   };

//   sendData = (jsonLobby, jsonPlayer) => {
//     console.log(
//       "LoginPage::sendData::Sending : " +
//         JSON.stringify(jsonLobby) +
//         "\n" +
//         JSON.stringify(jsonPlayer)
//     );
//     this.props.parentCallback(jsonLobby, jsonPlayer);
//     window.location.href = "/Test";
//   };

//   render() {
//     return (
//       <Link to="/Test">
//         <button
//           className="Hello"
//           onClick={this.sendData(this.lobby, this.player)}
//         ></button>
//       </Link>
//     );
//   }
// }

// export default LoginPage;

//https://exchangetuts.com/pass-post-data-with-windowlocationhref-1639499644478785  - jquery solution, not the best

//RADI:
import React from "react";
import LobbyPage from "./LobbyPage";
import { Navigate, Link, Router, Route } from "react-router-dom";

class LoginPage extends React.Component {
  sendData = () => {
    this.props.parentCallback("Hey ");
  };
  render() {
    return (
      <button className="ButtonChangeProps" onClick={this.sendData}>
        LoginPage
      </button>
    );
  }
}

export default LoginPage;
