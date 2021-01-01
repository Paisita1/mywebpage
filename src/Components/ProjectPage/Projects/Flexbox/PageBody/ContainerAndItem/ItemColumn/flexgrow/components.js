import React from "react";

export class Text1 extends React.Component {
	render() {
		return (

				<p style={{
            fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
            fontSize: "1.3rem",
            margin: "0 0 1.8rem",
            width: "95%"
          }}
        >
          {`This defines the ability for a flex item to grow if necessary. 
            It accepts a unitless value that serves as a proportion. 
            It dictates what amount of the available space inside the flex container the item should take up.`}
        </p>

			);
	}
}

export class Text2 extends React.Component {
	render() {
		return (

				<p style={{
            fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
            fontSize: "1.3rem",
            margin: "0 0 1.8rem",
            width: "95%"
          }}
        >
          {`If all items have`}<code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>flex-grow</code>
          {` set to 1, the remaining space in the container will be distributed equally to all children. 
            If one of the children has a value of 2, the remaining space would take up twice as much space as the others 
            (or it will try to, at least).`}
        </p>

			);
	}
}

export class Example extends React.Component {
	render() {
		return (

				<div style={{display: "flex", flexFlow: "column", backgroundColor: "#001628", padding: "18px 20px 20px 22px", borderRadius: "8px", marginBottom: "1.5rem"}}>
            
          <code style={{
              color: "#72e0d1",
            }}
          >
            <span style={{color: "#f5d67b"}}>.item</span> {' {'}
          </code>

          <code style={{
              color: "#72e0d1",
              margin: "10px 0 10px 15px"
            }}
          >
            {'  flex-grow: '} <span style={{color: "#fc9463"}}>4</span>; <span style={{color: "#5e7671", fontStyle: "italic"}}>/* default 0 */</span>
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

export class Text3 extends React.Component {
	render() {
		return (

				<p style={{
            fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
            fontSize: "1.3rem",
            margin: "0 0 1.8rem",
            width: "95%"
          }}
        >
          {`Negative numbers are invalid.`}
        </p>

			);
	}
}