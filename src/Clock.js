import React, { useState } from 'react'
import { useEffect } from 'react';

const Clock = () => {
	const [state,setState] = useState(Date.now() );
	const [now, setNow] = useState(state);
	const counter = 12 - Math.floor((now - state) / 1000);
	let timerID=undefined;
	console.log(counter);
	console.log(timerID);

	useEffect(() => {
		  timerID = setInterval(
			 () => {
				
				console.log("a")
				 if (counter > 0) return tick();
			else stopTimer()
			},
			500
		);
		console.log(timerID);
		  console.log(counter);
	  return () => {
		clearInterval(timerID);
	  }
	}, [now])
	const tick=() =>{
		setNow(
		 Date.now()
		);
	}
	
	const stopTimer=() => {
		clearInterval(timerID);
	}
	const startTimer = () => {
		setState(
			Date.now()
		  );
		setNow(
			Date.now()
		  );
	}
  return (
	<div>
	<h1>Hello, world!</h1>
		  <FormattedDate date={state} />
		  <FormattedDate date={counter} />
		  <button type="button" onClick={stopTimer}></button>
		  <button type="button" onClick={startTimer}></button>
  </div>
  )
}

export default Clock

function FormattedDate (props) {

	return <><h2>It is {props.date?.toString()}</h2>
	<h4>It is {props.date?.toString()}</h4></>;
}