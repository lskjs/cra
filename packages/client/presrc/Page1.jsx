import React, { Component } from 'react';
import Promise from 'bluebird';
import groupBy from 'lodash/groupBy';

class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'world123',
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
