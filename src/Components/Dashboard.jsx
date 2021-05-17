import React,{useState} from 'react';
import Dashboardform from './Dashboardform';
import List from './List';
import Navbar from './Navbar';

function Dashboard() {
    const [todos,setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
          return;
        }
    
        const newTodos = [todo, ...todos];
    
        setTodos(newTodos);
      };

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
    
        setTodos(removedArr);
      };  

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        });
        setTodos(updatedTodos);
      };
    

    return (
        <div>
            <Navbar />
            <h1>DASHBOARD</h1>
            <Dashboardform onSubmit={addTodo}/>
            <List todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
        </div>
    )
}

export default Dashboard
