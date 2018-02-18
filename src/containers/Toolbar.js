import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions';

const spreadSheetId= 'X698789hjhjhjjzzzkkw===ax'
const Toolbar = ({applicationId,fetchDataFromGoogle,changeChartType,theme}) => (
  <div>

    <button onClick={() => fetchDataFromGoogle(applicationId, `${spreadSheetId}${applicationId}`)}>Fetch Data</button>
    <select value={theme.chart.type} onChange={(event) => changeChartType(applicationId, event.target.value)}>
      <option value="line">Line Chart</option>
      <option value="area">Area Chart</option>
      <option value="spline">Spline</option>
      <option value="scatter">Scatter</option>
    </select>
  </div>
)

const mapDispatchToProps =(dispatch)=>( {
  ...bindActionCreators(actions, dispatch)
})


const mapStateToProps = (state, ownProps) => (
  {
      applicationId: state.byIds[ownProps.application].id,
      theme : state.byIds[ownProps.application].theme
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar)
