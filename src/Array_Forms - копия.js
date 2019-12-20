import React, { Component } from 'react';

class Table extends React.Component{
	constructor(){
		super();
		this.changeHandle = this.changeHandle.bind(this)
		
		this.state = {
			users: [
				{name: 'Коля', age: 30},
				{name: 'Вася', age: 40},
				{name: 'Петя', age: 50},
			], arr: []
        };
	}
	
	changeHandle(event){
		this.state.arr.push(event.target.value);
		this.setState({arr: this.state.arr});
		console.log(this.state.arr);
	}
	
	clickHandle(){		
		this.state.users.push({name: this.state.arr[0], age: this.state.arr[1]});
		this.setState({users: this.state.users});
		this.state.arr.length = 0;
	}
	
	render(){
		let list = this.state.users.map((elem, key) => {
			return <tr key={key}>
             <td>{elem.name}</td><td>{elem.age}</td>
			</tr>
		})
		
		return <div>
		  <table>
			  <tbody>
				{list}
			  </tbody>
		  </table>
		  <input onBlur={this.changeHandle}/>
		  <input onBlur={this.changeHandle}/>
		  <input type="submit" onClick={this.clickHandle.bind(this)}/>
		</div>
	}
}

class Ul extends React.Component{
	constructor(){
		super();
		this.state = {items: [1, 2, 3, 4, 5], value: ''};
	}
	
	inputHandle(event){
		this.setState({value: parseInt(event.target.value) -1});
	}
	
	clickHandle(){		
	    console.log(this.state.value); 
		this.state.items.splice(this.state.value, 1);		
		this.setState({items: this.state.items});
	}
	
	render(){
		let list = this.state.items.map((elem, key) => {
			return <li key={key}>{elem}</li>
		})
		
		return <div>
		  <ul>{list}</ul>
		  <input onBlur={this.inputHandle.bind(this)}/>
		  <input type="submit" onClick={this.clickHandle.bind(this)}/>
		</div>
	}
}

/*
class Links extends React.Component{
	constructor(){
		super();
		this.state = {
			hrefs: [
				{href: '1.html', text: 'ссылка 1'},
				{href: '2.html', text: 'ссылка 2'},
				{href: '3.html', text: 'ссылка 3'},
			], arr: []
        };
	}
	
	
	handle(ev){
		 this.state.arr.push(ev.target.value);		
		 this.setState({arr: this.state.arr});	  
	}
	
	addLi(){
	      let arr = this.state.arr;
		  this.state.hrefs.push({href: arr[0], text: arr[1]});
	      this.setState({hrefs: this.state.hrefs});
		  this.state.arr.length = 0	
		console.log(this.state.arr);
	}
	
	render(){
		let items = this.state.hrefs.map((elem, i) => {
			for(let a in elem){
				return <li key={i}><a href={elem.href}>{elem.text}</a></li>
			}
		});
		return <div>
		  <ul>{items}</ul>
		  <input onBlur={this.handle.bind(this)}/>
          <input onBlur={this.handle.bind(this)}/>			  
		  <button onClick={this.addLi.bind(this)}>add li</button>
		</div>
		
	}
}

class Result extends React.Component {
   constructor(){
	   super();
	   this.state = {names: ['хороша', 'жопочка', 'дуся']};
   }
   
   handle(ev){
	   this.state.names.push(ev.target.value);	
		
   }
   
   getRes(){
	   	this.setState({names: this.state.names});   
   }
   
   removeItem(num){
	this.state.names.splice(num, 1)
	this.setState({names: this.state.names});
   }
   
   render(){
	   let list = this.state.names.map((name, i) => {
	    return <li key={i}>
			{name}
			<button onClick={this.removeItem.bind(this, i)}>remove Item</button>
		</li>
	   });
	   
	  return <div>
	    <ul>{list}</ul>

        <input onBlur={this.handle.bind(this)}/>					
		<button onClick={this.getRes.bind(this)}>add name</button>
	  </div>
   }
}
*/
export default  Table;

