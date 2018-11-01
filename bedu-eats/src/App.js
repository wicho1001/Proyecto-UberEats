import React, { Component } from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom'
import FirstView from "./Route/FirstView"
import SecondView from "./Route/SecondView";
import Header from "./Components/FirstView/Header"


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
          {/* <Route path="/" component={Header} strict/> */}
            <Route path="/" component={FirstView}  exact/>
            <Route path="/2" component={SecondView} exact/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;