import React from "react";
import { useNavigate } from "react-router-dom";

// current version of react-router-dom ^6.x.x where hooks are preffered
// downgrade to 5.x.x to use withRouter
// alternative solution HOC withNavigate -> wrap around class component so the useNavigate hook can be used

export function withNavigate(Component) {
    return (props) => <Component {...props} navigate={useNavigate()} />;
}
