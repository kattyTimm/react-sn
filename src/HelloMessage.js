import React, { Component } from 'react';


class Summa extends React.Component {
   constructor(){
	   super();
	   this.state = {fio: []};
   }
   
   handle(ev){
	this.state.fio.push(ev.target.value);
  
     console.log(this.state.fio);	
   }
   
   getRes(){
		  this.setState({fio: this.state.fio}); ; 
   }
   
   render(){
	  return <div>
	    <p>{this.state.fio[0]} {this.state.fio[1]} {this.state.fio[2]}</p>
	    <input onBlur={this.handle.bind(this)}/>	
		<input onBlur={this.handle.bind(this)}/>
<input onBlur={this.handle.bind(this)}/>			
		
		<button onClick={this.getRes.bind(this)}>get summ</button>
	  </div>
   }
}

class Submit extends React.Component{
	constructor(){
		super();
		this.state = {value: '', text: ''};
	}
	
	handleChange2(ev){
		this.setState({value: ev.target.value});
		
	}
	
	handleSubmit(){
		console.log(this.state.value);
		this.setState({text: this.state.value});
	}
	
	render(){
		return (
		<div>
		<p>
		 Дан инпут и кнопка submit. В инпут вводится текст. Сделайте так, чтобы по нажатию на кнопку этот текст вывелся в какой-нибудь абзац.
		</p>
	    	<p>{this.state.text}</p>
		  <input onChange={this.handleChange2.bind(this)}/>	
          
          <input type="submit" onClick={this.handleSubmit.bind(this)}/>	
		</div>		 
		)
	}
}

class Text extends React.Component{
	constructor() {
		super();
		this.state = {surname: '', name: '', patronymic: ''};
	}
      
	handleChange(ev){
      let arr = ev.target.value.split(' ');	  	  
      this.setState({surname: arr[0], name: arr[1], patronymic: arr[2]});
	}
	
	 render(){		  
		 
		  return(
		   <div className='Test'>
		        <p>Surname: {this.state.surname}</p> 
				<p>Name: {this.state.name}</p> 
				<p>Patronymic: {this.state.patronymic}</p> 
				
		        <input onChange={this.handleChange.bind(this)}/>	              									
		   </div>
		 )
	 }
}


class HelloMessage extends React.Component {
	constructor(){
		super();
		this.hello = 'Приветик';
		
		this.deleteNum = this.deleteNum.bind(this);
		this.changeList = this.changeList.bind(this);
		this.state = {list: ['дуся', 'гадя', 'вадя'], data: '123', arr: [1, 2, 3, 4, 5]};
		
	}
	
  changeList(){
	    let list = this.state.list.slice(1);
		this.setState({list});
	}
	getSymbol(){
        let test = '=^^='		
		return <span> {test} !!!</span>;
	}

    deleteNum(){
	
		let arr = this.state.arr.splice(1, 'ff');
		this.setState({arr});
	}

  render() {
	let users  = this.state.list.map((elem, key) => {
	     return <li key={key}>{elem}</li>		
	});
	    
	let nums = this.state.arr.map((num, i)=> {
		return <li  key={i}>{num}</li>;
		});
	
	let css = {color: 'SlateBlue', fontWeight: 'bold'};	
	let color = 'DarkMagenta';
	
    return (
      <div>
	    <ul>{users}</ul>
		<p onClick={this.changeList}>press me</p>
		<p>{this.state.data}</p>
		<p>{this.getSymbol()}</p>
        <ol>{nums}</ol> 
		<button onClick={this.deleteNum}>btn</button>
      </div>	  
    );
  }
}

export default  Summa;

