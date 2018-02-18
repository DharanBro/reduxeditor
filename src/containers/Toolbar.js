import React from 'react'
import {connect} from 'react-redux'
import {fetchDataFromGoogle,changeChartType} from '../actions'
const spreadSheetId= 'X698789hjhjhjjzzzkkw===ax'
const Toolbar = ({applicationId,fetchDataFromGoogle,changeChartType}) => (
  <div>

    <button onClick={() => fetchDataFromGoogle(applicationId, `${spreadSheetId}${applicationId}`)}>Fetch Data</button>
    <select onChange={(event) => changeChartType(applicationId, event.target.value)}>
      <option value="line">Line Chart</option>
      <option value="area">Area Chart</option>
    </select>
  </div>
)

const mapDispatchToProps = {
  fetchDataFromGoogle,
  changeChartType
}

const mapStateToProps = (state, ownProps) => (
  {
      applicationId: state.byIds[ownProps.application].id
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar)
