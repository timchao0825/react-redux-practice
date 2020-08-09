import React from 'react';
// style
import style from './index.module.scss';
// simple component
// import TextArea from '../components/textarea/Textarea';
// image
// import testImg from '../assets/images/test.jpg';
// import testImg1 from '../assets/images/test1.png';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT, IS_LOGIN } from '../actions/actions';

function Index() {
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  // console.log('123')
  return (
    <div className="center-wrap">
      <div className="box">
        <h1 className={style.red}> Index Page</h1>
        <h3>Counter {counter}</h3>
        <button onClick={() => dispatch(INCREMENT())}> + </button>
        <button onClick={() => dispatch(DECREMENT())}> - </button>

        <hr />

        <h3>Loggin State</h3>
        <button onClick={() => dispatch(IS_LOGIN())}>LOG</button>
        {isLogged ? <h3>Valuable Information to see it</h3> : ''}
      </div>
      {/* <TextArea defaultVal={startVal}/> */}
    </div>
  );
}

export default Index;
