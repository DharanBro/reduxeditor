import React from 'react'
import { connect } from 'react-redux'
import {createNewApplication,toggleApplicationState,deleteApplication} from '../actions'
import PreviewContainer from './PreviewContainer'
import Editor from './Editor'


const App = ({applicationIds,createNewApplication,applications,toggleApplicationState,deleteApplication}) => (
  <div>
    <h2>VDT Cloud</h2>
    <button onClick={()=> createNewApplication()}>Create a New VDT application</button>
    <hr/>
    <ul className="tabs">
    {applicationIds.map(applicationId=>(
        <li key={applicationId}>
         <button  onClick={()=> toggleApplicationState(applicationId)}>{applications[applicationId].name}</button>
         <button  onClick={()=> deleteApplication(applicationId)}>X</button>
        </li>
    ))}
    </ul>
    {applicationIds.map(applicationId=>(
        <div key={applicationId} className="app-container">
         {applications[applicationId].isActive?<Editor applicationId={applicationId}/>:null }
         <div className={!applications[applicationId].isActive ? 'hidden' : ''}>
             <PreviewContainer application={applicationId} />
         </div>
        </div>
    ))}
  </div>
)

const mapStateToProps = (state) => ({
    applicationIds: state.visibleIds,
    applications : state.byIds
})

const mapDispatchToProps = {
    createNewApplication,
    toggleApplicationState,
    deleteApplication
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)


