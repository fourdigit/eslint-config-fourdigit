import React, { Component } from 'react';

export default class Good extends Component {
  constructor() {

    this.state = {
      goodComponent: false
    };
  }

  render() {
    if (!this.state.goodComponent) {
      return (
        <div class='test'>
          Hello Bad Component!
        </div>
      )
    }
  }
}
