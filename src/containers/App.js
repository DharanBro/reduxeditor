import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions';
import PreviewContainer from './PreviewContainer'
import {bindActionCreators} from 'redux'
import TabItem from '../components/TabItem'
import Editor from './Editor'


const App = ({ applicationIds, createNewApplication, applications, toggleApplicationState, deleteApplication,changeApplicationName }) => (
    <div className="editor-container">
        <div className="header">
            <h2>VDT Cloud</h2>
           
        </div>
        <div className="app-menu">
            <div className="tabs">
                {applicationIds.map(applicationId => (
                    <TabItem key={applicationId} application={applications[applicationId]} 
                    deleteApplication={deleteApplication} toggleApplicationState={toggleApplicationState}
                    changeApplicationName={changeApplicationName}

                    />
                ))}
                <div>
                 <button onClick={() => createNewApplication()}>+</button>
                </div>
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


