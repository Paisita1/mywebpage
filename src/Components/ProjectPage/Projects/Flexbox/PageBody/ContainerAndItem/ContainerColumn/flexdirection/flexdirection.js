import React from "react";

import {images} from '../../../../Assets/images.js';

import FlexDirectionText1 from './flexdirectiontext1.js';
import FlexDirectionEx from './flexdirectionex.js';
import FlexDirectionList from './flexdirectionlist/flexdirectionlist.js';

export default class FlexDirection extends React.Component {
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

            {'flex-direction'}

          </h2>

          <img src={images.containerExample1} alt="img" style={{width: "70%", marginBottom: "3rem"}} />

          <FlexDirectionText1 />

          <FlexDirectionEx />

          <FlexDirectionList />

        </div>

			);
	}
}