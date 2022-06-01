import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom"; //TODO: probably the smartest thing to do is to switch to this
import LoginPage from "./LoginPage";
import LobbyPage from "./LobbyPage";
//import 'bootstrap/dist/css/bootstrap.min.css'

//this might be useful: https://ui.dev/react-router-tutorial

//API for possible solution(duka) https://www.youtube.com/watch?v=ch8kiuRJc7I

export class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Hello World",
    };
  }

  clickMe = updateData => {
    this.setState({ data: updateData });
    console.log(
      "Parent::clickMe: " + updateData + " and state: " + this.state.data
    );
  };

  callbackFunction = childData => {
    this.setState({ data: childData }, this.clickMe(childData));
    console.log("Parent::callbackFunction::state: " + this.state.data);
    this.componentDidUpdate();
    //window.location.href = "/Test";
  };

  componentDidUpdate() {
    if (this.state.data !== "Hey ") {
      console.error(this.state.data);
    } else {
      console.log(
        "Parent::componentDidUpdate: " +
          this.state.data +
          " and " +
          this.dataFromParent
      );
      this.dataFromParent = this.state.data;
      window.location.href = "/Test";
    }
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <LoginPage parentCallback={this.callbackFunction} />
              </div>
            }
          ></Route>
          <Route
            path="/Test"
            element={
              <div>
                <LobbyPage dataFromParent={this.state.data} />
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    );
  }
}

export default Parent;

// export class Parent extends React.Component {
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
//     return (
//       <Router>
//         <Routes>
//           <Route
//             exact
//             path="/"
//             element={
//               <div>
//                 <LoginPage parentCallback={this.handleCallback} />
//               </div>
//             }
//           ></Route>

//           <Route
//             exact
//             path="/Test"
//             element={<LobbyPage datafromparent={this.state.jsonLobby} />}
//             // props dont update, cant send this to child need help
//           ></Route>
//         </Routes>
//       </Router>
//     );
//   }
// }

// export default Parent;
