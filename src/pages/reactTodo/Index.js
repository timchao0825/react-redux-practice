import React, { useState, useRef } from 'react';

// style
import style from './index.module.scss';
// component
import TodoItem from '../../components/todoItem/TodoItem';
import TodoAdd from '../../components/todoAdd/TodoAdd';
// default data
const defaultList = [
  {
    id: 1,
    todo: 'todo item 1',
  },
  {
    id: 2,
    todo: 'todo item 2',
  },
];

function Index() {
  const [todoList, updateTodoList] = useState([...defaultList]);
  const todoinputEl = useRef(null);

  const deleteBtn = (itemId) => {
    const keepList = [];
    todoList.forEach((obj, index) => {
      if (obj.id !== itemId) {
        keepList.push(obj);
      }
    });
    updateTodoList(keepList);
  };

  const addBtn = (e) => {
    e.preventDefault();
    const id = 1 + Math.random();
    const inputVal = todoinputEl.current.value;
    const todoListData = {
      id: id,
      todo: inputVal,
    };
    updateTodoList([...todoList, todoListData]);
  };

  return (
    <div className="center-wrap">
      <div className="box">
        <h1 className={style.red}>React Todo</h1>
        <div className="todoList">
          {todoList.map((value) => {
            return <TodoItem key={value.id} itemId={value.id} todoContent={value.todo} deleteList={deleteBtn} />;
          })}
        </div>
        <TodoAdd addBtn={addBtn} todoinputEl={todoinputEl} />
      </div>
    </div>
  );
}

export default Index;
