import React, { Component } from 'react';

class Content extends Component {
  render() {
    console.log('Content log');
    return <div>content</div>;
  }
}

class Test extends Component {
  handleClick = () => {
    this.setState({
      a: 1,
    });
  };

  test = () => {
    console.log('test 123');
  };

  render() {
    return (
      <div>
        test page
        <button onClick={this.handleClick}>setState</button>
        <Content />
      </div>
    );
  }
}

export default Test;
