const initialState = {
    text: ''
}

export default function reducerText(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TEXT':
            return {
                ...state,
                text: action.payload
            }
        default: return state;
    }
}
