
export {fetchDataFromGoogle} from './data'
let appId = 4; // Hardcoded for now..

export const changeApplicationName = (id,text) => ({
    type: 'CHANGE_APP_NAME',
    id,
    text
})

export const createNewApplication = (id,text) => ({
    type: 'CREATE_NEW_APP',
    id :appId++
})

export const toggleApplicationState = (id) =>({
    type: 'TOGGLE_APP_STATE',
    id
})

export const deleteApplication = (id) =>({
    type: 'DELETE_APP',
    id
})

export const changeChartType = (id,chartType) =>({
    type: 'CHANGE_CHART_TYPE',
    id,
    chartType
})


