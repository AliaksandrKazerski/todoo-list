import React from 'react';
import '../styles/App.css';

import Task from './Task';

function App(props) {
  
  const submitTask = () => {
    props.addTask();
  }

  const changeText = (e) => {
    props.setText(e.target.value);
  }

  const deleteTask = (id) => {
    props.removeTask(id);
  }

  const changeTextInTask = (e, id) => {
    props.changeTextTask(e.target.value, id);
  }

  const changeInTaskFromApp = (id, value) => {
    props.changeTask(id, value);
  }

  return (
    <div className="App">
      <input onChange={changeText} type="text" value={props.text}/>
      <button onClick={submitTask}>Добавить задание</button>
      <div>
        {props.tasks.map((item => <Task
        key={item._id} 
        item={item} 
        deleteTask={deleteTask}
        changeTextInTask={changeTextInTask}
        changeInTask={changeInTaskFromApp}
        ></Task>))}
      </div>
    </div>
  );
  
}

export default App;
