import React, { Component } from 'react';

class Textarea extends Component {
  constructor(props){
    super(props)
    this.state = {
      Count:props.defaultVal,
    };
  }
  AddVal = () => {
    const {Count} = this.state;
    this.setState((prevState, props) => ({
      Count: Count + 1,
      }),
      ()=>(
        console.log('add complete')
      )
    )
  }
  render() {
    const {defaultVal} = this.props;
    const {Count} = this.state;
    return (
      <div>
        <h2>counter {Count}</h2>
        <button onClick={this.AddVal}>Add count</button>
      </div>
    );
  }
}

export default Textarea;