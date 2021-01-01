import React from "react";

import {images} from '../../../../Assets/images.js';

import {
	Text1,
	Example,
	List,
	Text2,
	Text3
} from './justifycontentcomponents.js';

export default class JustifyContent extends React.Component {
	render() {
		return (

				<div style={{
            background: "linear-gradient(rgba(156,39,176,.2),#fff)",
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
            {'justify-content'}
          </h2>

          <img src={images.justifyContent} alt="img" style={{width: "58%", marginBottom: "25px"}} />

          <Text1 />

          <Example />

          <List />

          <Text2 />

          <Text3 />

        </div>

			);
	}
}