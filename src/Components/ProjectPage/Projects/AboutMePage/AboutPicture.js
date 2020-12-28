import React from "react";
import Isaac from './Isaac.jpg';

export default class AboutPicture extends React.Component {
	render() {
		return (
			<div style= {{display: "flex", justifyContent: "center", width: "100%"}}>
	            <figure style= {{width: "100%", margin: "0"}}>
	              <img src= {Isaac} alt= "Isaac" style= {{width: "100%"}}/>
	              <figcaption style= {{fontSize: "12px"}}>Taken 10/15/2020 6:19pm; Random ass picture I took for this about me page.</figcaption>
	            </figure>
         	</div>
		)
	}
}