import { combineReducers } from 'redux'
import initialState from '../api/initialapp-data.json'

const visibleIds = (state = [1, 2, 3], action) => {
    switch (action.type) {
        case 'CREATE_NEW_APP':
            return [...state, action.id]
        default:
            return state;
    }
}

const updateChartType = (theme, type) => {
    return {
        ...theme,
        chart: {
            type
        }
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
                    [id]: { ...state[id], data: action.data }
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
        case 'REQUEST_DATA':
            if (id) {
                return {
                    ...state,
                    [id]: { ...state[id], isFetching: !state[id].isFetching }
                }
            }
            return state;
        case 'REQUEST_DATA_COMPLETE':
            if (id) {
                return {
                    ...state,
                    [id]: { ...state[id], isFetching: !state[id].isFetching }
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
        case 'CHANGE_CHART_TYPE':
            if (id) {
                return {
                    ...state,
                    [id]: { ...state[id], theme: updateChartType(state[id].theme, action.chartType) }
                }
            }
            return state;
        default:
            return state;
    }
}

const reducers = combineReducers({
    byIds,
    visibleIds
})


export default reducers;