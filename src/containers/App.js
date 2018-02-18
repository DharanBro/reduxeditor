import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions';
import PreviewContainer from './PreviewContainer'
import {bindActionCreators} from 'redux'
import Editor from './Editor'


const App = ({ applicationIds, createNewApplication, applications, toggleApplicationState, deleteApplication }) => (
    <div className="editor-container">
        <div className="header">
            <h2>VDT Cloud</h2>
            <button onClick={() => createNewApplication()}>Create a New VDT application</button>
        </div>
        <div className="app-menu">
            <div className="tabs">
                {applicationIds.map(applicationId => (
                    <div key={applicationId} className={applications[applicationId].isActive ? 'tab-item active' : 'tab-item'}>
                        <span onClick={() => toggleApplicationState(applicationId)}>{applications[applicationId].name}</span>
                        <button onClick={() => deleteApplication(applicationId)}>X</button>
                    </div>
                ))}
            </div>
        </div>
        <div className="editor">
            {applicationIds.map(applicationId => (
                <div key={applicationId}>
                    {applications[applicationId].isActive ? <Editor applicationId={applicationId} /> : null}
                </div>
            ))}
        </div>
        <div className="preview">
            {applicationIds.map(applicationId => (
                <div key={applicationId} className={!applications[applicationId].isActive ? 'hidden' : ''}>
                    <PreviewContainer application={applicationId} />
                </div>
            ))}
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    applicationIds: state.visibleIds,
    applications: state.byIds
})

const mapDispatchToProps =(dispatch)=>( {
    ...bindActionCreators(actions, dispatch)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)


