import React, {Component} from 'react';
import Splash from './Splashed';
import Main from './main';

export default class App extends Component {
  state = {splashing: true};
  render() {
    if (this.state.splashing) return <Splash />;
    else return <Main />;
  }
}
