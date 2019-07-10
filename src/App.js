import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./home/header";
import Check_in from "./home/check_in";
import Activities from "./home/activities";
import About_us from "./home/about_us";
import Footer from "./home/footer";
import Our_team from "./home/our_team";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Check_in/>
        <Activities/>
        <About_us/>
        <Our_team/>
        <Footer/>
      </div>
    );
  }
}

export default App;
