import React from "react";
import '../styles/navbar.css';

export default function NavBar({inputValue, setInputValue, search}){
	return (<div className="navbar">
		<span className="heading">Movie Bar</span>
		<input 
		onChange= {(e)=>{
			// inputValue = e.target.value; // wrong for react
			setInputValue(e.target.value);
			// search(e);
		}}
		type="text" placeholder="Search.." className="search-bar"></input>
		{/* <button onClick={search}> Search</button> */}

	</div>);
}