import { combineReducers } from 'redux'

const initialState = {
    "1": {
        id: 1,
        name: 'VDT Analysis App -1',
        data: null,
        isActive: false
    },
    "2": {
        id: 2,
        name: 'VDT Analysis App -2',
        data: null,
        isActive: false
    },
    "3": {
        id: 3,
        name: 'VDT Analysis App -3',
        data: null,
        isActive: false
    }
};

const visibleIds = (state = [1, 2, 3], action) => {
    switch (action.type) {
        case 'CREATE_NEW_APP':
            return [...state, action.id]
        default:
            return state;
    }
}


const byIds = (state = initialState, action) => {
    const { id } = action;
    switch (action.type) {
        case 'CHANGE_APP_NAME':
            if (id) {
                return {
                    ...state,
                    [id]: { ...state[id], name: action.text }
                }
            }
            return state;
        case 'FETCH_DATA_FROM_API':
            if (id) {
                return {
                    ...state,
                    [id]: { ...state[id], data: action.spreadsheetID }
                }
            }
            return state;
        case 'TOGGLE_APP_STATE':
        if (id) {
            return {
                ...state,
                [id]: { ...state[id], isActive: !state[id].isActive }
            }
        }
            return state;
        case 'CREATE_NEW_APP':
            return {
                ...state,
                [id]: {
                    id,
                    name: `VDT Analysis App - ${id}`,
                    data: null
                }
            }
        default:
            return state;
    }
}

const reducers = combineReducers({
    byIds,
    visibleIds
})


export default reducers;