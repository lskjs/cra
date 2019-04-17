import React, { Component } from 'react';
import groupBy from 'lodash/groupBy';

class Page2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'world2',
    };
  }
  render() {
    const { hello } = this.state;
    return (
      <div>
        Page2
        {hello}
      </div>
    );
  }
}

export default Page2;
