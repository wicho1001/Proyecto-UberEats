import React, { Component } from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom'
import FirstView from "./Route/FirstView"
// import  from './Components/Imc/ImcRegister'



class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" component={FirstView}  exact/>
            {/* <Route path="/" component={}/> */}
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;