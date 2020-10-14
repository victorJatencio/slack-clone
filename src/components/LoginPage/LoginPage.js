import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../stateProvider";
import { actionTypes } from "../../reducer";

import "./LoginPage.css";

function LoginPage() {
  const [state, dispatch] = useStateValue();

  const singIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="loginPage">
      <div className="login__container">
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png"
          alt=""
        />

        <h1>Sign in to Victor's HQ</h1>
        <p>victoratencio.slack.com</p>
        <Button onClick={singIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default LoginPage;
