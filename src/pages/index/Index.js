import React, { Component } from 'react';

import style from './index.module.scss'

import TextArea from '../../components/textarea/Textarea'

import testImg from '../../assets/images/test.jpg';
import testImg1 from '../../assets/images/test1.png';
class Index extends Component {
  state = {
    test: 'test state',
    startVal: 10,
  };
  render() {
    const {test , startVal} = this.state;
    return (
      <div className="d-flex flex-wrap full">
        <h3 className={style['red']}>
          Index Page | { test }
        </h3>
        <hr/>
        <TextArea defaultVal={startVal}/>
      </div>
    );
  }
}

export default Index;
