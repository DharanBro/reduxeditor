import mock from '../api/mock'
import * as types from '../constants/ActionTypes'
//Begin Request
const fetchingData = (id) => ({
    type: types.REQUEST_DATA,
    id
})

//Complete Request
const fetchingDataSuccess = (id) => ({
    type: types.REQUEST_DATA_COMPLETE,
    id
})

//Payload Data
const fetchDataFromApi = (id, data) =>(
    {
        type: types.FETCH_DATA_FROM_API,
        id,
        data
    }
)

export const fetchDataFromGoogle = (id, spreadsheetID) => dispatch => {
    dispatch(fetchingData(id))
    mock.getChartData(data => {
      dispatch(fetchDataFromApi(id,data))
      dispatch(fetchingDataSuccess(id))
    },id)
  }

