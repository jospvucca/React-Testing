import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import LobbyPage from "./LobbyPage";
import WritingPhase from "./WritingPhase";
import { withNavigate } from "./hoc/withNavigate";
import SignalRHubConnector from "./signalr/SignalRHubConnector";
import * as SignalR from "@microsoft/signalr";

export class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Hello World",
      hubConnection: null,
    };
  }

  instantiateSignalRConnection = async () => {
    const hubConnection = new SignalR.HubConnectionBuilder()
      .withUrl("http://localhost:43358/api/Lobby/create", {
        // skipNegotiation: true,
        transport: SignalR.HttpTransportType.WebSockets,
        connectionId: "oCiGPUtYeDh8y3ee8edCWS",
      })
      .configureLogging(SignalR.LogLevel.Information)
      // .withAutomaticReconnect()
      .withHubProtocol(new SignalR.JsonHubProtocol())
      .build();

    await this.setState(
      { hubConnection: hubConnection },
      async () =>
        await this.state.hubConnection
          .start()
          .then(() => console.log("Connection Started!"))
          .catch(err => console.error(err))
    );

    // if (
    //   hubConnection.connectionId !== null ||
    //   hubConnection.connectionId === null
    // ) {
    //   console.error(hubConnection.connectionId);
    // }

    // this.props.signalRPropsCallback(hubConnection);

    this.state.hubConnection.on(
      "ReceiveMessage",
      (receivedUsername, receivedMessage) => {
        console.log(
          "HubConnection recieved method xxxReceiveMessagexxx with parameters: " +
            receivedUsername +
            " " +
            receivedMessage
        );
      }
    );
  };

  signalRPropsCallbackFunction = async hub => {
    console.warn(
      "Parent::signalRPropsCallbackFunction... This function should recieve all props from signalr class and be used as a main here"
    );
    console.warn("Recieved: " + JSON.stringify(hub));
    // await this.setState({ hubConnection: hub });
    console.warn("UPDATED HUB: " + JSON.stringify(this.state.hubConnection));
  };

  callbackFunction = (childData, link) => {
    this.setState({ data: childData });
    console.log("Parent::callbackFunction::state: " + this.state.data);
    this.props.navigate(link);
  };

  signalRParentCallbackFunction = () => {
    console.log(
      "Parent::singalRParentCallbackFunction:: Called from LoginPage."
    );

    if (this.state.hubConnection === null) {
      console.error(
        "Parent::signalRParentCallbackfunction::state hubConnection is null."
      );
    }

    this.state.hubConnection
      .invoke("SendMessage", "parent", "msg")
      .then(() => console.log("Parent::hubConnection::invoke::SendMessage"))
      .catch(err => console.error(err));
  };

  componentDidMount = async () => {
    if (this.state.hubConnection == null) {
      await this.instantiateSignalRConnection();
    } else {
      console.log("Parent::componentDidMount::hubConnection is not null.");
    }
  };

  render() {
    return (
      <div>
        Signalr: {JSON.stringify(this.state.hubConnection)}
        {/* <SignalRHubConnector
          signalRPropsCallback={this.signalRPropsCallbackFunction}
        /> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <LoginPage
                  parentCallback={this.callbackFunction}
                  // signalRParentCallback={this.signalRParentCallbackFunction}
                />
                Data: {JSON.stringify(this.state.hubConnection)}
              </div>
            }
          ></Route>
          <Route
            exact
            path="/Test"
            element={
              <div>
                <LobbyPage
                  parentCallback={this.callbackFunction}
                  dataFromParent={this.state.data}
                />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/WritingPhase"
            element={
              <div>
                <WritingPhase dataFromParent={this.state.data} />
              </div>
            }
          ></Route>
        </Routes>
      </div>
    );
  }
}

// HOC
export default withNavigate(Parent);
