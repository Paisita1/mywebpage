import React from "react";

import {images} from '../../../../Assets/images.js';

import {
	FlexWrapText1,
	FlexWrapEx,
	FlexWrapList,
	FlexWrapText2
} from './flexwrapcomponents.js';

export default class FlexWrap extends React.Component {
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
            {'flex-wrap'}
          </h2>

          <img src={images.flexWrap} alt="img" style={{width: "70%", marginBottom: "25px"}} />

          <FlexWrapText1 />

          <FlexWrapEx />

          <FlexWrapList />

          <FlexWrapText2 />

        </div>

			);
	}
}