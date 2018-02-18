import React from 'react'

import Toolbar from './Toolbar'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions';

const Editor = ({ application, changeApplicationName }) => (
    <div className="editor">
        <button onClick={() => changeApplicationName(application.id, Date.now())}>Change the Application Name</button>
        <nav>
            <Toolbar application={application.id} />
        </nav>
    </div>
)

const mapStateToProps = (state, ownProps) => (
    {
        application: state.byIds[ownProps.applicationId]
    })

const mapDispatchToProps =(dispatch)=>( {
    ...bindActionCreators(actions, dispatch)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Editor)