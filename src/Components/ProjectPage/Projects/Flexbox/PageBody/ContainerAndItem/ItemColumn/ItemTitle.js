import React from "react";

import {images} from '../../../Assets/images.js';

export default class ItemTitle extends React.Component {
	render() {
		return (

				<div style={{display: "flex", flexDirection: "column"}}>

					<img src={images.items} style={{width: "75%"}} />

          <h2 style={{
              fontSize: "2.5rem",
              marginBottom: "0"
            }}
          >
            {'Properties for the Children'}
          </h2>

          <h2 style={{
              fontSize: "2.5rem",
              marginTop: "0"
            }}
          >
            {'(flex items)'}
          </h2>

				</div>

			);
	}
}