import React from 'react';

const TodoItem = (props) => {
  return (
    <div className="todoItem">
      <div className="todoName">{props.todoContent}</div>
      <div onClick={() => props.deleteList(props.itemId)} className="deleteBtn">
        -
      </div>
    </div>
  );
};

export default TodoItem;
