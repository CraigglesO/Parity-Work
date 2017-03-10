import React, { Component } from 'react';
import * as bodymovin from './assets/bodymovin';
// import Coin          from './assets/coin.json';
import Accounts      from './assets/accounts.json';
import Security      from './assets/security.json';
import './App.css';

// const bodymovin = window.bodymovin;

class App extends Component {
  componentDidMount() {
  }

  clicker(e) {
    e.preventDefault();
    let animation = this.refs.animation;
    animation.innerHTML = '';
    this.security_anim = bodymovin.loadAnimation({
      container: animation, // the dom element
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: Accounts // the animation data
    });
    process.nextTick(() => {
      this.security_anim.play();
    });
  }

  clicky(e) {
    e.preventDefault();
    let animation = this.refs.animation;
    animation.innerHTML = '';
    this.security_anim = bodymovin.loadAnimation({
      container: animation, // the dom element
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: Security // the animation data
    });
    process.nextTick(() => {
      this.security_anim.play();
    });
  }

  render() {
    return (
      <div className="App">
        <div className="svg-wrapper">
          <div id="animation" ref="animation" />
        </div>
        <button onClick={this.clicker.bind(this)} />
        <button onClick={this.clicky.bind(this)} />
      </div>
    );
  }
}

export default App;
