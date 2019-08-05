export function setTask(task) {
    return {
        type: 'SET_TASK',
        payload: task
    }
}

export function setText(text) {
    return {
        type: 'ADD_TEXT',
        payload: text
    }
}

export function changeTextTask(text, id) {
    return {
        type: 'CHANGE_TEXT',
        payload: {
            text: text,
            id: id
        }
    }
}