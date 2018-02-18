import React from 'react'
import PreviewContainer from './PreviewContainer'
import Toolbar from './Toolbar'
import { connect } from 'react-redux'
import { changeAppName } from '../actions';


const Editor = ({ application, changeAppName }) => (
    <div className="editor">
        <h2 className="editor-title">Editor {application.name}  <button onClick={() => changeAppName(application.id, 'Nice')}>Hello</button></h2>
        <nav>
            <Toolbar application={application.id} />
        </nav>
        
        <PreviewContainer application={application.id} />
       
    </div>
)

const mapStateToProps = (state, ownProps) => (
    {
        application: state.byIds[ownProps.applicationId]
    })

const mapDispatchToProps = {
    changeAppName
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Editor)