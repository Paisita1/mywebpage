import React from "react";

import {images} from '../../../../Assets/images.js';

import {
	Text,
	Example
} from './components.js';

export default class Order extends React.Component {
	render() {
		return (

				<div style={{
              background: "linear-gradient(rgba(255,138,0,.2),#fff)",
              padding: "2rem",
              marginBottom: "5px"
            }}
          >

            <h2 style={{
                margin: "0 0 .8rem",
                fontFamily: "Ringside Regular A,Ringside Regular B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif",
                fontSize: "1.8rem"
              }}
            >
              {'order'}
            </h2>

            <img src={images.itemsExample1} alt="picture" style={{width: "70%", marginBottom: "1.5rem"}} />

            <Text />

            <Example />

          </div>

			);
	}
}