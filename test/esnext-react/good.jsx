import React, { Component } from 'react';

export default class Good extends Component {
  constructor() {
    super();

    this.state = {
      goodComponent: true,
    };
  }

  render() {
    if (this.state.goodComponent) {
      return <div className="test">Hello Good Component!</div>;
    } else {
      return false;
    }
  }
}
