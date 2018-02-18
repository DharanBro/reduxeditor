import React from 'react'
import {connect} from 'react-redux'
import ReactHighcharts from 'react-highcharts'
import _chartdata from '../api/chartdata.json'

const PreviewContainer = ({data,applicationId}) => (
  
  <div>
    {console.log('hello from preview')}
    Preview It's all happening here
    {data?<ReactHighcharts config={_chartdata[applicationId]}/>:'There is no data yet'}
    {Date.now()}
    
  </div>
)

const mapStateToProps = (state, ownProps) => (
  {
      data: state.byIds[ownProps.application].data,
      applicationId: ownProps.application
  })


export default connect(
  mapStateToProps
)(PreviewContainer)