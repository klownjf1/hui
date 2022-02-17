import React, {useEffect, useState} from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";


const ProfileStatusWithHooks = (props) => {

/*    let stateWithSetState = useState(false)
    let [editMode, setEditMode] = [stateWithSetState[0], stateWithSetState[1]]*/

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)


    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    let [state, setState] = useState(0)

    let counter = () =>{
        setState(state+1)
    }

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    let handleFocus = (event) => event.target.select()


    return (
        <div>

            <div>{state}</div>
            <button onClick = {counter}></button>


            {
                !editMode ?
                    <div>
                        <span onDoubleClick={activateEditMode}> {props.status || "----"} </span>
                    </div>:
                    <div>
                        <input  value={status} autoFocus={true} onBlur = {deactivateEditMode} onChange={onStatusChange} onFocus={handleFocus}/>
                    </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks