import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
library.add(faClock)
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { library } from "@fortawesome/fontawesome-svg-core";

//create your first component
export default class Home extends React.Component{
	constructor(){
		super();
		this.state= {
			clickedLight: null
		};
	}

	render (){
		let greenExtraClass='';
		if(this.state.clickedLight == 'green') greenExtraClass = 'selected';
		let yellowExtraClass='';
		if(this.state.clickedLight == 'yellow') yellowExtraClass = 'selected';
		let redExtraClass='';
		if(this.state.clickedLight == 'red') redExtraClass = 'selected';
		return <div class="back">
			<div class="container text-center" id="body">
					<div class="light-container bg-dark">
						<div className={"light green " + greenExtraClass} onClick={() => this.setState({ clickedLight: 'green'})}></div>
						</div>
					<div class="light-container bg-dark"><div className={"light yellow " + yellowExtraClass} onClick={() => this.setState({ clickedLight: 'yellow'})}></div></div>
					<div class="light-container bg-dark"><div className={"light red " + redExtraClass} onClick={() => this.setState({ clickedLight: 'red'})}></div></div>
			</div>
		</div>
	;}
};

