import React from 'react'
import {connect} from 'react-redux'
import {fetchDataFromApi} from '../actions'
const spreadSheetId= 'X698789hjhjhjjzzzkkw===ax'
const Toolbar = ({applicationId,fetchDataFromApi}) => (
  <div>
     {console.log('hello from toolbar')}
    <button onClick={() => fetchDataFromApi(applicationId, `${spreadSheetId}${applicationId}`)}>Fetch Data</button>
  </div>
)

const mapDispatchToProps = {
  fetchDataFromApi
}

const mapStateToProps = (state, ownProps) => (
  {
      applicationId: state.byIds[ownProps.application].id
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar)
