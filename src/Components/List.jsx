import React,{useState} from 'react';
import {RiDeleteBinLine} from 'react-icons/ri';

function List({todos,completeTodo,removeTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
      });

      

    return todos.map((todo, index) => (
        <div
          className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
          key={index}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className="icon">
           <RiDeleteBinLine
            onClick={() => removeTodo(todo.id)}
            className='delete-icon'
            />
          </div>
        </div>
    ))


}

export default List;
