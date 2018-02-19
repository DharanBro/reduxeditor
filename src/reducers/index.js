import { combineReducers } from 'redux'
import initialState from '../api/initialapp-data.json'
import * as types from '../constants/ActionTypes'

export const getVisibleApps = (state) => {
    return Object.keys(state);
}

const visibleIds = (state = getVisibleApps(initialState), action) => {
    switch (action.type) {
        case types.CREATE_NEW_APP:
            return [...state, action.id]
        case types.DELETE_APP:
            let index = state.indexOf(`${action.id}`) // Hacky to convert as a string
            return [
                ...state.slice(0, index),
                ...state.slice(index+ 1)
            ]
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
        case types.CHANGE_APP_NAME:
            if (id) {
                return {
                    ...state,
                    [id]: { ...state[id], name: action.text }
                }
            }
            return state;
        case types.FETCH_DATA_FROM_API:
            if (id) {
                return {
                    ...state,
                    [id]: { ...state[id], data: action.data }
                }
            }
            return state;
        case types.DELETE_APP:
            if (id) {
                let updatedState = Object.assign({}, state);
                delete updatedState[id];
                return updatedState;
            }
            return state;
        case types.TOGGLE_APP_STATE:
            let updatedState = Object.assign({}, state);
            Object.keys(updatedState).forEach(key => {
                updatedState[key].isActive = false
            });
            if (id) {
                return {
                    ...updatedState,
                    [id]: { ...updatedState[id], isActive: true }
                }
            }
            return state;
        case types.REQUEST_DATA:
            if (id) {
                return {
                    ...state,
                    [id]: { ...state[id], isFetching: !state[id].isFetching }
                }
            }
            return state;
        case types.REQUEST_DATA_COMPLETE:
            if (id) {
                return {
                    ...state,
                    [id]: { ...state[id], isFetching: !state[id].isFetching }
                }
            }
            return state;
        case types.CREATE_NEW_APP:
            return {
                ...state,
                [id]: {
                    id,
                    name: `VDT Analysis App - ${id}`,
                    data: null
                }
            }
        case types.CHANGE_CHART_TYPE:
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