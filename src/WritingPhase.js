import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
//import 'bootstrap/dist/css/bootstrap.min.css'

export class WritingPhase extends React.Component {
  componentDidMount() {
    console.log("LobbyPage::componentDidMount " + this.props.dataFromParent);
  }

  componentDidUpdate() {
    console.log("LobbyPage::componentDidUpdate " + this.props.dataFromParent);
  }

  render() {
    return <div>The data from parent is:{this.props.dataFromParent}/</div>;
  }
}

export default WritingPhase;
