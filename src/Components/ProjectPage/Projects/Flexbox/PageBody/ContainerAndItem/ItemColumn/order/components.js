import React from "react";

export class Text extends React.Component {
	render() {
		return (

				<p style={{
            fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
            fontSize: "1.3rem",
            margin: "0 0 1.5rem"
          }}
        >
          {'By default, flex items are laid out in the source order. However, the '}
          <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>order</code>
          {' property controls the order in which they appear in the flex container.'}
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
            {'  order: '} <span style={{color: "#fc9463"}}>5</span>; <span style={{color: "#5e7671", fontStyle: "italic"}}>/* default is 0 */</span>
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