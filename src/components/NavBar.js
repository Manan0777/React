import React from "react";
import '../styles/navbar.css';

export default function NavBar({inputValue, setInputValue, search}){
	return (<div className="navbar">
		<span className="heading"><h2>Movie Bar</h2></span>
		<input 
		onChange= {(e)=>{
			// inputValue = e.target.value; // wrong for react
			setInputValue(e.target.value);
			
		}}
		type="text" placeholder="Search.." className="search-bar"></input>
		<button onClick={search}> Search</button>

	</div>);
}