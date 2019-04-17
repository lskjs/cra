import React, { Component } from 'react';
import Promise from 'bluebird';

class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'world',
    };
  }
  render() {
    const { hello } = this.state;
    return (
      <div>
        Page1
        {hello}
      </div>
    );
  }
}

export default Page1;
