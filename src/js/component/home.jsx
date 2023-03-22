import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
library.add(faClock)
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { library } from "@fortawesome/fontawesome-svg-core";

const getnum = (cont) => {
	var num;
	if (cont >= 9){
		cont = cont - (9 * Math.floor(cont / 9));
		num= cont;
	}else{
		num= cont;
	}
	return num;
}

const green = (n) => {
	if (n >=0 && n <3){
		return " selected";
	}else{
		return '';
	}
}

const yellow = (n) => {
	if (n >=3 && n <6){
		return " selected";
	}else{
		return '';
	}
}

const red = (n) => {
	if (n >=6 && n <9){
		return " selected";
	}else{
		return '';
	}
}


//create your first component
const Home = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
	  setInterval(() => {
		setCount(prevCount => prevCount + 1);
	  }, 1000);
	}, []);  
	
	return (
		<div class="back">
			<div class="container text-center" id="body">
					<div class="light-container bg-dark">
						<div className={"light green" + green(getnum(count))}></div>
						</div>
					<div class="light-container bg-dark"><div className={"light yellow" + yellow(getnum(count))}></div></div>
					<div class="light-container bg-dark"><div className={"light red" + red(getnum(count))}></div></div>
			</div>
            

		</div>
	);
};

export default Home;
