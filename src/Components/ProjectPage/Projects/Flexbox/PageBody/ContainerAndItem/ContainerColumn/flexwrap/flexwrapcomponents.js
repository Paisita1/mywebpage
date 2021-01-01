import React from "react";

import {
  Item1,
  Item2,
  Item3
} from './flexwraplistitems.js';

export class FlexWrapText1 extends React.Component {
	render() {
		return (

				<p style={{
            fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
            fontSize: "1.3rem",
            margin: "0 0 1.8rem",
            width: "90%"
          }}
        >
          {`By default, flex items will all try to fit onto one line. 
            You can change that and allow the items to wrap as needed with this property.`}
        </p>

			);
	}
}

export class FlexWrapEx extends React.Component {
	render() {
		return (

				<div style={{
            display: "flex",
            flexFlow: "column",
            backgroundColor: "#001628",
            padding: "18px 20px 20px 22px",
            borderRadius: "8px",
            marginBottom: "1.5rem",
          }}
        >
            
          <code style={{
              color: "#72e0d1",
            }}
          >
            <span style={{color: "#f5d67b"}}>.container</span> {' {'}
          </code>

          <code style={{
              color: "#72e0d1",
              margin: "10px 0 10px 15px",
            }}
          >
            {'  flex-wrap: '} <span style={{color: "#f5d67b"}}>nowrap | wrap | wrap-reverse</span>;
          </code>

          <code style={{
              color: "#72e0d1",
              margin: "0"
            }}
          >
           {'}'}
          </code>

        </div>

			);
	}
}

export class FlexWrapList extends React.Component {
  render() {
    return (

        <ul style={{
            fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
            fontSize: "1.3rem",
            margin: "0 0 1.5rem",
            lineHeight: "1.5",
            maxWidth: "470px"
          }}
        >

          <Item1 />

          <Item2 />

          <Item3 />

        </ul>

      );
  }
}

export class FlexWrapText2 extends React.Component {
  render() {
    return (

        <p style={{
            fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
            fontSize: "1.3rem",
            margin: "0 0 1.8rem",
            width: "90%"
          }}
        >
          {`There are some `}
          <span className="textHover" style={{
              textDecoration: "underline",
              textDecorationColor: "#a2dffb",
              color: "#007db5",
            }}
          >
            visual demos of flex-wrap here
          </span>
          {`.`}
        </p>

      );
  }
}