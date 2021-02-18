import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Coming Soon...</h1>
      <form className="login">
        <label>
          <h1>Name.</h1>
          <input
            type="text"
            name="name"
            className="textbox"
            placeholder="enter your name"
          />
        </label>
        <br></br>
        <br></br>
        <label>
          <h1>Password.</h1>
          <input
            type="password"
            name="password"
            className="textbox"
            placeholder="enter your password"
          />
        </label>
        <br></br>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
