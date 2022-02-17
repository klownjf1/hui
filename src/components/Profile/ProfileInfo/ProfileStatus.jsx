import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";


class ProfileStatus extends React.Component{

    state = {
        editMode: false,
        status: this.props.status

    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
        //this.state.editMode = true
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    handleFocus = (event) => event.target.select()


    componentDidUpdate(prevProps, prevState, snapshot)  {
        if(prevProps.status !== this.props.status) {
            this.setState(
                {status: this.props.status}
            )
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode ? <div>
                            <span onDoubleClick={this.activateEditMode}>{this.props.status || "status doesn't exist"}</span>
                        </div> :
                        <div>
                            <input onChange={this.onStatusChange} onBlur={this.deActivateEditMode} autoFocus={true}
                                   onFocus={this.handleFocus} value={this.state.status}
                            />
                        </div>
                }
            </div>
        )


    }
}

export default ProfileStatus