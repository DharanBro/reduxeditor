export const changeAppName = (id,text) => ({
    type: 'CHANGE_APP_NAME',
    id,
    text
})

export const fetchDataFromApi = (id, spreadsheetID) =>(
    {
        type: 'FETCH_DATA_FROM_API',
        id,
        spreadsheetID
    }
)
let appId = 4;
export const createNewAnalysisApplication = (id,text) => ({
    type: 'CREATE_NEW_APP',
    id :appId++
})

export const toggleTabState = (id) =>({
    type: 'TOGGLE_APP_STATE',
    id
})