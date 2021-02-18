import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Header from "./Header";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import AllNotes from "./AllNotes";
import Login from "./Login";
import NoteContainer from "./NoteContainer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Flatnote.</h1>
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/notes"
          render={() => {
            return <AllNotes />;
          }}
        />
      </div>
    );
  }
}

export default App;
