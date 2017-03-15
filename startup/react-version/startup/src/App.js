import React, { Component } from 'react';
import * as bodymovin       from './assets/bodymovin';
import Parity               from './assets/parity.json';
import Coin                 from './assets/coin.json';
import Accounts             from './assets/accounts.json';
import Security             from './assets/security.json';
import { Line } from 'rc-progress';
import './App.css';

// const bodymovin = window.bodymovin;

const animations = [
  Parity,
  Coin,
  Accounts,
  Security
];
const ContentHead = ["Topic Token", "Topic accounts/trade", "Topic Security"];
const ContentBody = ["Content will eventually go here", "Content will eventually go here", "Content will eventually go here"];
let i = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      percent: 0,
      contentHead: "",
      contentBody: ""
    };
  }
  componentDidMount() {
    this.setAnim(animations[0]);
  }

  clickLeft(e) {
    e.preventDefault();
    i--;
    if (i < 0) i = 3;
    this.setPercent(i);
    this.setAnim(animations[i]);
  }

  clickRight(e) {
    e.preventDefault();
    i++;
    if (i > 3) i = 0;
    this.setPercent(i);
    this.setAnim(animations[i]);
  }

  setPercent(x) {
    switch (x) {
      case 0: this.setState({
        percent: 0,
        contentHead: "",
        contentBody: ""
      });
      break;
      case 1: this.setState({ percent: 33, contentHead: ContentHead[x-1], contentBody: ContentBody[x-1] }); break;
      case 2: this.setState({ percent: 66, contentHead: ContentHead[x-1], contentBody: ContentBody[x-1] }); break;
      case 3: this.setState({ percent: 100, contentHead: ContentHead[x-1], contentBody: ContentBody[x-1] }); break;
      default: this.setState({ percent: 0, contentHead: "", contentBody: "" }); break;
    }
  }

  setAnim(which) {
    let animation = this.refs.animation;
    animation.innerHTML = '';
    this.security_anim = bodymovin.loadAnimation({
      container: animation, // the dom element
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: which // the animation data
    });
    process.nextTick(() => {
      this.security_anim.play();
    });
  }

  render() {
    return (
      <div className="App">
        <Line id="progress-bar" percent={this.state.percent} strokeWidth="1" strokeColor="#393d4c" trailColor="#d9dde7" />
        <div className="svg-wrapper">
          <div id="animation" ref="animation" />
        </div>
        <svg id="left-click" onClick={this.clickLeft.bind(this)} x="0px" y="0px" width="66.338px" height="121.111px">
          <g>
          		<line fill="none" stroke="#D9DDE7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="59.773" y1="5" x2="5" y2="59.773"/>
          		<line fill="none" stroke="#D9DDE7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="5" y1="59.773" x2="61.338" y2="116.111"/>
          </g>
        </svg>
        <svg id="right-click" onClick={this.clickRight.bind(this)} x="0px" y="0px" width="66.338px" height="121.111px">
          <g>
            <line fill="none" stroke="#D9DDE7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="6.565" y1="5" x2="61.338" y2="59.773"/>
            <line fill="none" stroke="#D9DDE7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="61.338" y1="59.773" x2="5" y2="116.111"/>
          </g>
        </svg>

        <div id="contentHead">{this.state.contentHead}</div>
        <div id="contentBody">{this.state.contentBody}</div>

        <button id="create">Create Account</button>
        <button id="continue">Continue</button>
      </div>
    );
  }
}

export default App;
