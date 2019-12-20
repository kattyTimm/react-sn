import React, { Component } from 'react';

class Ten extends React.Component{
	constructor(){
		super();
		this.state = {hide: true, nums: ['first', 'second', 'third'], value: 0, ids: [0,1,2]};
		
	}
	hh(ev){
	  this.setState({value: ev.target.value});
	  console.log(this.state.ids[this.state.value])
	}
	
	render(){
			let options = this.state.nums.map((elem, i) => <option key={i} value={i}>{elem}</option>);
			let paragraphs = this.state.ids.map((id, i) => <p id={id} key={i}> paragraph {id}</p>);
		
		return <div>
			<select value={this.state.value} onChange={this.hh.bind(this)}>
			   {options}
			</select>
			
			 <p hidden={this.state.value == this.state.ids[this.state.value] ? false : true}>text 1</p>
			 <p hidden={this.state.value == this.state.ids[this.state.value] ? false : true}>text 2</p>
			 <p hidden={this.state.value == this.state.ids[this.state.value] ? false : true}>text 3</p>
             
		</div>
	}
}


class Six extends React.Component{
	constructor(){
		super();
		this.state = {option: 'one'}
		this.radioHandle = this.radioHandle.bind(this);
	}
	
	
	radioHandle(e){
		this.setState({option: e.target.value});
		console.log(this.state.option)
	}
	
	render(){
		return <div>
		   <input type="radio" value="one" name="six" checked={this.state.option == "one"} onChange={this.radioHandle}/>
		   <input type="radio" value="two" name="six" checked={this.state.option == "two"} onChange={this.radioHandle}/> // проверяет равенство данного инпута со значением в стэйт
		   <input type="radio" value="three" name="six" checked={this.state.option == "three"} onChange={this.radioHandle}/>
		   <p>{this.state.option}</p>
		</div>
	}
}

class Radio extends React.Component{
	constructor(){
		super();
		this.state = {option: 'option1'};
	}
	
	handleRadioChange(ev){
		this.setState({option: ev.target.value});
		console.log(this.state.option)
	}
	
	render(){
		return <div>
		  <input type="radio" value="option1" checked={this.state.option == "option1"} name="name" onChange={this.handleRadioChange.bind(this)} />
		  <input type="radio" value="option2" checked={this.state.option == 'option2'} name="name" onChange={this.handleRadioChange.bind(this)} />
		</div>
	}
}

class Thirteen extends React.Component{
	constructor(){
		super();
		this.date = new Date();
		this.year  = this.date.getFullYear();
		this.month = this.date.getMonth();
		this.arr = [];

		this.state = {day: 1, month: this.month, year: this.year,  monthes: ['янв', 'февр', 'март', 'апрель' , 'май' , 'июнь' , 'июль', 'авг', 'сент', 'окт', 'нояб', 'декабрь'],
		arrDays: this.range(1, this.getLastDayMonth(this.month, this.year)), arrYears: [2017,2018,2019]};
						
		this.changeHandle = this.changeHandle.bind(this);		
	}
	
	range(from, to){
	   let arr = [];
		  for(let i = from; i <= to; i++){
			  arr.push(i);
		  }
		 return arr;
	}
	
	changeHandle(ev){
		this.setState({day: ev.target.value, month: ev.target.value, year: ev.target.value});

	}
	
	getLastDayMonth(month, year){
		let date = new Date(year, month+1, 0);
		return date.getDate();
	}
	
	render(){

        let optionsDays = this.state.arrDays.map((elem, i) => <option key={i} value={i}>{elem}</option>); 
		let optionsMOnthes = this.state.monthes.map((elem, i) => <option key={i} value={i}>{elem}</option>);
		let optionsYears = this.state.arrYears.map((elem, i) => {
			console.log(elem)
			return <option key={i} value={i}>{elem}</option>;
		
		});
		return <div >
			<select value={this.state.day} onChange={this.changeHandle}>
			{optionsDays}
			</select>
			<select value={this.state.month} onChange={this.changeHandle}>
			  {optionsMOnthes}
			</select>
			<select onChange={this.changeHandle} value={this.state.year}>
				{optionsYears}
			</select>
			<p>дата - {this.state.day}, месяц - {this.state.monthes[this.state.month]}, год {this.state.arrYears[this.state.year]}</p>
		</div>
	}
}


class Twelve extends React.Component{
	constructor(){
		super();
		this.state = {checked: true, val: ''};
	}
	
	changeHandle(ev){
		this.setState({checked: !this.state.checked});
	}
	
	val(ev){
		this.setState({val: ev.target.value});
	}
	
	render(){
		return <div>
		  <input type="checkbox"  checked={this.state.checked} onChange={this.changeHandle.bind(this)}/>
		  <input onChange={this.val.bind(this)} value={this.state.val} disabled={!this.state.checked}/>
		</div>
	}
}

class Eleven extends React.Component{
	constructor(){
		super();
		this.state = {value: '', arr: [], val: 0};
	}
	
	inputHandle(ev){
		this.setState({value: ev.target.value});
	}
	
	clickHandle(){
		this.state.arr.push(this.state.value);
		this.setState({arr: this.state.arr});
		console.log(this.state.arr)
	}
	
	selectHandle(ev){
		this.setState({val: ev.target.value});
	}
	
	render(){
		
		let options = this.state.arr.map((elem, i) => <option key={i} value={i}>{elem}</option>);
		
		return <div>
			<input onChange={this.inputHandle.bind(this)} value={this.state.value} defaultValue={this.state.value}/>
			<button onClick={this.clickHandle.bind(this)}>click</button>
			<select onChange={this.selectHandle.bind(this)} value={this.state.val}>
				{options}
			</select>
			<p>{this.state.arr[this.state.val]}</p>
		</div>
	}
}



class Nine extends React.Component{
	constructor(){
		super();
		this.state = {conditions: ['отмечено', 'не отмечено'], value: 0, checked: true};
	}
	
    changeHandle(ev){
		this.setState({checked: !this.state.checked, value: ev.target.value});
	}
	
	render(){
		let options = this.state.conditions.map((elem, i) => <option key={i} value={i}>{elem}</option>)
		
		return <div>
		    <p>{this.state.checked ? 'active' : 'inactive'}</p>
		      	<input type="checkbox" checked={this.state.checked} />
			<select value={this.state.value} onChange={this.changeHandle.bind(this)}>
			{options}
			</select>
		</div>
	}
}

class Eight extends React.Component{
	constructor(){
		super();
		this.state = {value: 0, colors: ['cyan', 'hotpink', 'lightskyblue']};
	}
	
	changeColor(ev){
		this.setState({value: ev.target.value});
	}
	
	render(){
		 
		let options= this.state.colors.map((elem, i) => <option key={i} value={i}>{elem}</option>)
		 
		return <div>		
		<p style={{color: this.state.colors[this.state.value]}}>пиписечка</p>
		
		<select value={this.state.value} onChange={this.changeColor.bind(this)}>
			{options}
		</select>
		</div>
	}
}
class Textarea extends React.Component{
	constructor(){
		super();
		this.state = {texts: []};
	}
	
	hh(ev){	
     this.state.texts.push(ev.target.value);
	 ev.target.value = '';
	}
	
	addPost(){
	 this.setState({texts:  this.state.texts});   
	}
	
	render(){		
        	
        let post = this.state.texts.map(elem => <p>{elem}</p>);
		
		return <div>
             <textarea  onBlur={this.hh.bind(this)} />
			 <button onClick={this.addPost.bind(this)}>add post</button>
			 {post}
		</div>
	}
}


class Select extends React.Component{
	constructor(){
		super();
		this.state = {value: 2, cities: ['city 1', 'city 2', 'city 3']};
	}
	
	ggg(ev){
		this.setState({value: ev.target.value})
	}
	
	render(){
		
		let options = this.state.cities.map((city, i) => <option key={i} value={i}>{city}</option>);
		
		return <div>
		  <p>{this.state.cities[this.state.value]}</p>
		
		 <select value={this.state.value} onChange={this.ggg.bind(this)}>
		    
			{options}
		 </select>
		</div>
	}
}

class Three extends React.Component{
	constructor(){
		super();
		this.state = {value: true, show: true}
	}
	
	handle(){
		this.setState({value: !this.state.value});
	}
	
	render(){
		return <div>
		   <p hidden={this.state.value}>dfgbdgdg</p>
		   <input type="checkbox" onChange={this.handle.bind(this)} />
		</div>
	}
}


class Checkbox extends React.Component{
	constructor(){
		super();
		this.state = {condition: true};
	}
	
	gg(ev){
		this.setState({condition: !this.state.condition});
	}
	
	render(){
		
		return <div>
		<p>{this.state.condition ? 'active' : 'inactive'}</p>
		  <input type="checkbox" checked={this.state.condition} onChange={this.gg.bind(this)}/> // вместо вэлъю в чексбокс атрибут чекед!!!
		</div>
	}
}


class Seven extends React.Component{
	constructor(){
		super();
		this.state = {texts: []};
	}
	
	setValue(ev){
		this.state.texts.push(ev.target.value);
		ev.target.value = '';
	}
	
	addElem(){
		this.setState({texts: this.state.texts});
	    console.log(this.state.texts)
	}
	
	render(){
		let post;
		
		if(this.state.texts){
		   post = this.state.texts.map((elem, i) => {
			  return <p key={i}>{elem}</p>
			   });
		}
		
		return <div>
		   <textarea onBlur={this.setValue.bind(this)}/>
		   <button onClick={this.addElem.bind(this)}>add array</button>
			   {post}
		</div>
	}
}


export default Ten;

