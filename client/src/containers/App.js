import React, { Component } from "react";
// import "./App.css";
// import Layout from "./Layout/Layout";
// import HomePage from "./HomePage/HomePage";
import Blog from "./Blog/Blog";
import Counter from "./Counter/Counter.js";
// import { StyleRoot } from "radium";
import { BrowserRouter } from "react-router-dom";
import Persons from "./Persons/Persons";
//Grommet
// import { Grommet } from "grommet";

// import classes from "./App.css";

// import Cockpit from "../components/Cockpit/Cockpit";
// import WithClass from "../hoc/withClass";
//this file will hold future routing logic...
class App extends Component {
  state = {
    mainContent: "homepage"
  };

  changeMainContentHandler = page => {
    this.setState({ mainContent: page });
  };
  //

  render() {
    let title = "Title/page Name";
    let mainContentToRender;
    //
    switch (this.state.mainContent) {
      case "homepage":
        mainContentToRender = <HomePage title={title} />;
        break;
      case "blog":
        mainContentToRender = (
          <BrowserRouter>
            <Blog title={title} />{" "}
          </BrowserRouter>
        );
        break;
      case "counter":
        mainContentToRender = <Counter />;
        break;
      case "users":
        mainContentToRender = (
          <div className="App">
            <ol>
              <li>
                Turn this app into one which does NOT use local state (in
                components) but instead uses Reduxess
              </li>
            </ol>
            <Persons />
          </div>
        );
        break;
      default:
        mainContentToRender = null;
    }

    return (
    //   <Grommet plain>
        <BrowserRouter>
          <StyleRoot>
            <Layout
              changePage={this.changeMainContentHandler}
              mainContent={this.state.mainContent}
            >
              {mainContentToRender}
            </Layout>
          </StyleRoot>
        </BrowserRouter>
    //   </Grommet>
    );
  }
}

export default App;