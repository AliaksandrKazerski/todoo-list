import React from 'react';
import { connect } from 'react-redux';

import { setText, changeTextTask } from '../components/actions/actions';
import { addTasksThunkCreator, removeTaskThunkCreator, getTaskThunkCreator, changeTaskThunkCreator } from '../components/thunks/thunks';
import App from '../components/App';

class ContainerApp extends React.Component {
  constructor(props) {
    super(props);
    this.addTaskInComponent = this.addTaskInComponent.bind(this);
    this.removeTaskFromComponent = this.removeTaskFromComponent.bind(this);
    this.changeTextTaskFromComponent = this.changeTextTaskFromComponent.bind(this);
    this.changeTaskFromComponent = this.changeTaskFromComponent.bind(this);
  }

  addTaskInComponent() {
    this.props.addTasks(this.props.text);
  }

  removeTaskFromComponent(id) {
    this.props.removeTask(id);
  }

  componentDidMount() {
    this.props.getTask();
  }

  changeTaskFromComponent(id, value) {
    this.props.changeTask(id, value);
  }

  changeTextTaskFromComponent(value, id) {
    this.props.changeTextTask(value, id);
  }

  render() {
    return (
      <>
        <App text={this.props.text}
          tasks={this.props.tasks}
          setText={this.props.setText}
          addTask={this.addTaskInComponent}
          removeTask={this.removeTaskFromComponent}
          changeTask={this.changeTaskFromComponent}
          changeTextTask={this.changeTextTaskFromComponent}>
        </App>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.reducerTask.tasks,
    text: state.reducerText.text
  }
}

export default connect(mapStateToProps, 
  { 
    setText, changeTextTask, 
    addTasks: addTasksThunkCreator, 
    removeTask: removeTaskThunkCreator, 
    getTask: getTaskThunkCreator,
    changeTask: changeTaskThunkCreator 
  })(ContainerApp);
