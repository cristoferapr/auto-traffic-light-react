import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
library.add(faClock)
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { library } from "@fortawesome/fontawesome-svg-core";

const separate = (cont) => {
	var num;
	if (cont / 60 >= 1){
		cont = cont - (60 * Math.floor(cont / 60));
		num= Math.floor((cont / 10 ));
	}else{
		num= Math.floor((cont / 10 ));
	}
	return num;
}

const separate2 = (cont) => {
	var num;
	if (cont / 600 >= 1){
		cont = cont - (600 * Math.floor(cont / 600));
		num= Math.floor((cont / 60 ) );
	}else{
		num= Math.floor((cont / 60 ) );
	}
	return num;
}

const separate3 = (cont) => {
	var num;
	if (cont / 3600 >= 1){
		cont = cont - (3600 * Math.floor(cont / 3600));
		num= Math.floor((cont / 600 ) );
	}else{
		num= Math.floor((cont / 600 ) );
	}
	return num;
}

const separate4 = (cont) => {
	var num;
	if (cont / 36000 >= 1){
		cont = cont - (36000 * Math.floor(cont / 36000));
		num= Math.floor((cont / 3600 ) );
	}else{
		num= Math.floor((cont / 3600 ) );
	}
	return num;
}

const separate5 = (cont) => {
	var num;
	if (cont / 360000 >= 1){
		cont = cont - (360000 * Math.floor(cont / 360000));
		num= Math.floor((cont / 36000 ) );
	}else{
		num= Math.floor((cont / 36000 ) );
	}
	return num;
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
					<div class="digit"><FontAwesomeIcon icon="fa-regular fa-clock" /></div>
					<div class="digit">{separate5(count)}</div>
					<div class="digit">{separate4(count)}</div>
					<div class="digit">{separate3(count)}</div>
					<div class="digit">{separate2(count)}</div>
					<div class="digit">{separate(count)}</div>
					<div class="digit">{count % 10}</div>
			</div>
            

		</div>
	);
};

export default Home;
