import taskAPI from '../../api/api';
import { setTask } from '../actions/actions';

export const addTasksThunkCreator = (text) => (dispatch) => {
  taskAPI.addTask(text)
    .then(data => dispatch(setTask(data)))
    .catch(err => console.log(err))
}

export const removeTaskThunkCreator = (id) => (dispatch) => {
  taskAPI.removeTask(id)
    .then(data => dispatch(setTask(data)))
    .catch(err => console.log(err))
}

export const getTaskThunkCreator = () => (dispatch) => {
  taskAPI.getTask()
    .then(data => dispatch(setTask(data)))
    .catch(err => console.log(err))
}

export const changeTaskThunkCreator = (id, value) => (dispatch) => {
  taskAPI.changeTask(id, value)
    .then(data => dispatch(setTask(data)))
    .catch(err => console.log(err))
}
