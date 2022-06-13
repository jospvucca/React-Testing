import React from "react";
import PopUp from "./PopUp";

//TODO: finish with css: https://medium.com/@daniela.sandoval/creating-a-popup-window-using-js-and-react-4c4bd125da57
export class AppPopUp extends React.Component {
  state = {
    seen: false,
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen,
    });
  };

  render() {
    return (
      <div>
        <div className="btn" onClick={this.togglePop}>
          <button>New User?</button>
        </div>
        {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
      </div>
    );
  }
}

export default AppPopUp;
