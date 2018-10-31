import React, { Component } from 'react';
import Header from '../Components/FirstView/Header'
import SecNav from '../Components/FirstView/SecNav'
import SecSearch from '../Components/FirstView/SecSearch'
import SecPromotions from '../Components/FirstView/SecPromotions'

import "../index.css";

class FirstView extends Component {


  render() {
    return (
      <div className="">
        <Header/>
        <SecNav/>
        <SecSearch/>
        <SecPromotions/>
      </div>
    );
  }
}

export default FirstView;