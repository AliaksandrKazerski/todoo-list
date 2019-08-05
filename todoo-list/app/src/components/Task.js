import React from 'react';
import '../styles/Task.css';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    }
    this.changeInTask = this.changeInTask.bind(this);
  }

  changeInTask() {
    if (this.state.disabled) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
      this.props.changeInTask(this.props.item._id, this.props.item.text);
    }
  }

  render() {
    let button;
    if (this.state.disabled) {
      button = <button onClick={this.changeInTask}>Открыть</button>;
    } else {
      button = <button onClick={this.changeInTask}>Изменить</button>;
    }
    return (
      <div>
        <input onChange={e => this.props.changeTextInTask(e, this.props.item._id)} type="text" value={this.props.item.text} disabled={this.state.disabled}></input>
        <button onClick={() => this.props.deleteTask(this.props.item._id)}>Удалить</button>
        {button}
      </div>
    );
  }
}
