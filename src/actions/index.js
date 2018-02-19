import {getVisibleApps} from '../reducers'
import initialState from '../api/initialapp-data.json'
import * as types from '../constants/ActionTypes'
export {fetchDataFromGoogle} from './data'

let appId = getVisibleApps(initialState).length+1; // Hardcoded for now..

export const changeApplicationName = (id,text) => ({
    type: types.CHANGE_APP_NAME,
    id,
    text
})

export const createNewApplication = (id,text) => ({
    type: types.CREATE_NEW_APP,
    id :appId++
})

export const toggleApplicationState = (id) =>({
    type: types.TOGGLE_APP_STATE,
    id
})

export const deleteApplication = (id) =>({
    type: types.DELETE_APP,
    id
})

export const changeChartType = (id,chartType) =>({
    type: types.CHANGE_CHART_TYPE,
    id,
    chartType
})


