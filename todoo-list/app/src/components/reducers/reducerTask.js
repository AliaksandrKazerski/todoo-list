const initialState = {
    tasks: []
}

export default function reducerTask(state = initialState, action) {
    switch (action.type) {
        case 'SET_TASK':
            return {
                ...state,
                tasks: action.payload
            }
        case 'CHANGE_TEXT':
            let changedTasks = state.tasks.map((item) => {
                if(item._id === action.payload.id){
                    item.text = action.payload.text;
                    return item;
                }
                return item;
            });
            return {
                ...state,
                tasks: changedTasks
            }
        default: return state;
    }
}
