import React from "react";
import * as SignalR from "@microsoft/signalr";
import LoginPage from "../LoginPage";

class SignalRHubConnector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      message: "",
      hubConnection: null,
    };

    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage = () => {
    console.log("SignalR::sendMessage is called...");
    this.state.hubConnection
      .invoke("SendMessage", "username", "message")
      .catch(err => console.err(err));
  };

  componentDidMount = async () => {
    const hubConnection = new SignalR.HubConnectionBuilder()
      .withUrl("http://localhost:43358/api/Lobby/create")
      .configureLogging(SignalR.LogLevel.Information)
      .withAutomaticReconnect()
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

    this.props.signalRPropsCallback(hubConnection);

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

  // componentDidUpdate() {
  //   this.props.signalRPropsCallback(Object.toString(this.state.hubConnection));
  // }

  render() {
    return (
      <div>
        {"SignalR\n\n\n\n\n\nsadasd"}
        <button onClick={this.sendMessage} />
      </div>
    );
  }
}

export default SignalRHubConnector;
