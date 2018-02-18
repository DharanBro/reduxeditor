import React from 'react'

import Toolbar from './Toolbar'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions';

const Editor = ({ application, changeApplicationName }) => (
    <div className="editor">
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