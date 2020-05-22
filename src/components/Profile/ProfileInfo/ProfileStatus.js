import React from 'react';


class ProfileStatus extends React.Component {
	//statusInputRef = React.createRef();

	state = {
			editMode: false,
			status: this.props.status
		
	}

	 activateEditMode = () => {
	 	console.log(this)
		this.setState({editMode: true});
	}
    // чтобы не байндить постоянно методы, можно их писать в виде стрелочных функций!
	/* inputHandler = (ev) => {
       this.setState({inputValue: ev.target.value});
	} */

	 deactivateEditMode = (ev) => {
		this.setState({editMode: false});
     //   this.props.updateStatus(this.statusInputRef.current.value);
         this.props.updateStatus(this.state.status);

	}

	statusChange = (ev) => {
		this.setState({status: ev.currentTarget.value});
	}

    /*componentDidUpdate вызывается только для обновленных свойств, первый раз он не вызывается*/
	componentDidUpdate(prevProps, prevState){
		//debugger;
		if(prevProps.status !== this.props.status){
           this.setState({status: this.props.status}); 
		  
	    }
	}

	render(){
		
	       return( 
				<div>
				{this.state.editMode ? 
					<div>
			           <input autoFocus={true} onBlur={this.deactivateEditMode} 
			             ref={this.statusInputRef} value={this.state.status} onChange={this.statusChange}/>
			       </div>
			        :
			        <div>
			          <span onDoubleClick={this.activateEditMode}>{this.props.status || 'NO status'}</span>
			       </div>
			    } 
			       
			       
				</div>
			)
    }
}

export default ProfileStatus;
