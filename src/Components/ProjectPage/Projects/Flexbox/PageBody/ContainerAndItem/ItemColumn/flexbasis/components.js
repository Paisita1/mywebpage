import React from "react";

export class Text1 extends React.Component {
	render() {
		return (

				<p style={{
            fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
            fontSize: "1.3rem",
            margin: "0 0 1.8rem",
            width: "100%"
          }}
        >
          {`This defines the default size of an element before the remaining space is distributed. 
            It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The `}
          <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>auto</code>
          {` keyword means “look at my width or height property” (which was temporarily done by the `}
          <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>main-size</code>
          {` keyword until deprecated). The `}
          <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>content</code>
          {`keyword means “size it based on the item’s content” – this keyword isn’t well supported yet, 
            so it’s hard to test and harder to know what its brethren `}
          <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>max-content</code>
          {`,`}<code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>min-content</code>
          {`, and`}<code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>fit-content</code>
          {` do`}
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
            {'  flex-basis: '} <span style={{color: "#f5d67b", marginLeft: "10px"}}>| auto</span>; <span style={{color: "#5e7671", fontStyle: "italic"}}>/* default auto */</span>
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

export class Text2 extends React.Component {
	render() {
		return (

				<p style={{
            fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
            fontSize: "1.3rem",
            margin: "0 0 1.8rem",
            width: "83%"
          }}
        >
          {`If set to `}<code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>0</code>
          {`, the extra space around content isn’t factored in. If set to `}
          <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>auto</code>
          {`, the extra space is distributed based on its `}
          <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>flex-grow</code>
          {`value. `}
          <span className="textHover" style={{
              textDecoration: "underline",
              textDecorationColor: "#a2dffb",
              color: "#007db5",
            }}
          >
            See this graphic
          </span>.
        </p>

			);
	}
}