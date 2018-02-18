import React from 'react'
import {connect} from 'react-redux'
import ReactHighcharts from 'react-highcharts'

const PreviewContainer = ({data,theme,applicationId,isFetching}) => (
  <div>
    {data && !isFetching?<ReactHighcharts config={updateTheme(data,theme)}/>:isFetching?'Fetching... Please wait..':'There is no data yet'}
  </div>
)

const updateTheme=(data,theme)=>{
  return {
     ...data,chart:theme["chart"]
   }
}

const mapStateToProps = (state, ownProps) => (
  {
      data: state.byIds[ownProps.application].data,
      theme : state.byIds[ownProps.application].theme,
      isFetching : state.byIds[ownProps.application].isFetching,
      applicationId: ownProps.application
  })


export default connect(
  mapStateToProps
)(PreviewContainer)