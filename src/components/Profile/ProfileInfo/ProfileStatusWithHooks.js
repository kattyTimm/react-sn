import React, {useState, useEffect} from 'react';


const ProfileStatusWithHooks = (props) => {

	// useState возвращает значение, и функцию, которая это значение меняет

	let stateWithSetState = useState(false); // здесь сидит массив
//	let editMode = stateWithSetState[0];   первым элементом будет значение
//	let setEditMode = stateWithSetState[1];   вторым элементом - функция, устанавливающая это значение

	let [editMode, setEditMode] = stateWithSetState;
	let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
    	setEditMode(true);
    }

    const  deactivateEditMode = (ev) => {
		setEditMode(false);
         props.updateStatus(status);

	}

	const statusChange = (ev) => {
		//this.setState({status: ev.currentTarget.value});
		setStatus(ev.currentTarget.value);
	}

	useEffect( () => {  // useEffect выполнит какие-то действия когда компонента уже вмотнтируется
            setStatus(props.status);
	}, [props.status] );

	       return(
				<div>
				  { !editMode && // если !editMode, показываем спан (editMode == false)
						<div>
						     <span onDoubleClick={activateEditMode}>{props.status || "---------"}</span>

				       </div>
			      }
			        { editMode &&   // если editMode, показываем инпут
				       <div>
				           <input autoFocus={true} onBlur={deactivateEditMode} onChange={statusChange} value={status}/>
				       </div>
			        }


				</div>
			)

}

export default ProfileStatusWithHooks;
