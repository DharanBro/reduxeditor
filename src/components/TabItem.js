import React from 'react'


class TabItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          rename: props.rename,
          value:props.application.name
        };
      }

    handleDoubleClick(){
        this.setState({
            rename:true
        })
    }
    submitForm(e){
        this.setState({
            rename:false
        })
        this.props.changeApplicationName(this.props.application.id,this.state.value);
        e.preventDefault();
    }

    handleChange(e){
        this.setState({
            value:e.target.value
        });
    }

    render() {
        return (<div className={this.props.application.isActive ? 'tab-item active' : 'tab-item'}>
            {this.state.rename?
                <form onSubmit={(e)=>this.submitForm(e)}>
                    <input ref="appName" type="text" value={this.state.value} onChange={(e)=>this.handleChange(e)}/>
                </form>
                : <span onDoubleClick={() => this.handleDoubleClick()} onClick={() => this.props.toggleApplicationState(this.props.application.id)}>{this.props.application.name}</span>}
  
          <button onClick={() => this.props.deleteApplication(this.props.application.id)}>X</button>
        </div>
        )
    }
}

export default TabItem