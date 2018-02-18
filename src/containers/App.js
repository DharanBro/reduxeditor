import React from 'react'
import { connect } from 'react-redux'
import { createNewApplication, toggleApplicationState, deleteApplication } from '../actions'
import PreviewContainer from './PreviewContainer'
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
                    <div key={applicationId} className="tab-item">
                        <button onClick={() => toggleApplicationState(applicationId)}>{applications[applicationId].name}</button>
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

const mapDispatchToProps = {
    createNewApplication,
    toggleApplicationState,
    deleteApplication
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)


