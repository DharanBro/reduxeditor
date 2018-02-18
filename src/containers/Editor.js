import React from 'react'

import Toolbar from './Toolbar'
import { connect } from 'react-redux'
import { changeApplicationName } from '../actions';


const Editor = ({ application, changeApplicationName }) => (
    <div className="editor">
        <h2 className="editor-title">Editor {application.name}  <button onClick={() => changeApplicationName(application.id, Date.now())}>Change the Application Name</button></h2>
        <nav>
            <Toolbar application={application.id} />
        </nav>
    </div>
)

const mapStateToProps = (state, ownProps) => (
    {
        application: state.byIds[ownProps.applicationId]
    })

const mapDispatchToProps = {
    changeApplicationName
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Editor)