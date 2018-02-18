import React from 'react'
import { connect } from 'react-redux'
import Editor from '../components/Editor'
import {createNewAnalysisApplication,toggleTabState} from '../actions'

const App = ({applicationIds,createNewAnalysisApplication,applications,toggleTabState}) => (
  <div>
    <h2>VDT Cloud</h2>
    <button onClick={()=> createNewAnalysisApplication()}>Create a New VDT application</button>
    <hr/>
    {applicationIds.map(applicationId=>(
        <button key={applicationId} onClick={()=> toggleTabState(applicationId)}>{applicationId}</button>
    ))}
    {applicationIds.map(applicationId=>(
         <div key={applicationId} className={!applications[applicationId].isActive ? 'hidden' : ''}>
             <Editor applicationId={applicationId}/> 
         </div>
    ))}
  </div>
)

const mapStateToProps = (state) => ({
    applicationIds: state.visibleIds,
    applications : state.byIds
})

const mapDispatchToProps = {
    createNewAnalysisApplication,
    toggleTabState
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)


