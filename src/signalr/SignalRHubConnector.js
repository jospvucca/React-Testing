import React from "react";
import * as SignalR from "@microsoft/signalr";
import LoginPage from "../LoginPage";

//TODO: https://docs.microsoft.com/en-us/aspnet/signalr/overview/guide-to-the-api/mapping-users-to-connections
//Ovde pise vise kako preservat connectionId, iako je kompleksno

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

  instantiateSignalR = async () => {
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

    await this.setState({ hubConnection: hubConnection }, () =>
      this.state.hubConnection
        .start()
        .then(() => console.log("Connection Started!"))
        .catch(err => console.error(err))
    );

    if (
      hubConnection.connectionId !== null ||
      hubConnection.connectionId === null
    ) {
      console.error(hubConnection.connectionId);
    }

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

  componentDidMount = async () => {
    await this.instantiateSignalR();
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
