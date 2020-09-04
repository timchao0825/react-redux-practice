import React from 'react';

const TodoAdd = (props) => {
  return (
    <form className="todoAdd" onSubmit={props.addBtn}>
      <input type="text" ref={props.todoinputEl} placeholder="Add todo list" required />
      <button>Add New</button>
    </form>
  );
};

export default TodoAdd;
