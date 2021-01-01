import React from "react";

import {
	Item1,
	Item2,
	Item3,
	Item4,
	Item5,
	Item6,
	Item7,
	Item8,
	Item9,
	Item10
} from './listitems.js';

export class Text1 extends React.Component {
	render() {
		return (

				<p style={{
            fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
            fontSize: "1.3rem",
            margin: "0 0 1.8rem",
            width: "80%"
          }}
        >
          {`This defines the alignment along the main axis. 
            It helps distribute extra free space leftover when either all the 
            flex items on a line are inflexible, 
            or are flexible but have reached their maximum size. 
            It also exerts some control over the alignment of items when they overflow the line.`}
        </p>

			);
	}
}

export class Example extends React.Component {
	render() {
		return (

				<div style={{
            display: "flex",
            flexFlow: "column",
            backgroundColor: "#001628",
            padding: "18px 20px 20px 22px",
            borderRadius: "8px",
            marginBottom: "1.5rem",
            maxWidth: "525px",
            overflowX: "scroll",
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
              minWidth: "1260px"
            }}
          >
            {'  justify-content: '}
            <span style={{color: "#f5d67b"}}>flex-start | flex-end | center | 
            space-between | space-around | space-evenly | start | end | left | right 
            <span style={{color: "#fc9463"}}>...</span><span style={{color: "#aa7ee1"}}> + </span>
            safe | unsafe</span>;
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

export class List extends React.Component {
	render() {
		return (

				<ul style={{
            fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
            fontSize: "1.3rem",
            margin: "0 0 1.5rem",
            lineHeight: "1.5",
            maxWidth: "490px"
          }}
        >

        	<Item1 />

        	<Item2 />

        	<Item3 />

        	<Item4 />

        	<Item5 />

        	<Item6 />

        	<Item7 />

        	<Item8 />

          <Item9 />

          <Item10 />

        </ul>

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
            width: "84%"
          }}
        >

          {`Note that that browser support for these values is nuanced. For example, `}
          <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>space-between</code>
          {` never got support from some versions of Edge, and start/end/left/right aren’t in Chrome yet. MDN `}
          <span className="textHover" style={{
              textDecoration: "underline",
              textDecorationColor: "#a2dffb",
              color: "#007db5",
            }}
          >
           has detailed charts
          </span>
          {`. The safest values are `}
          <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>flex-start</code>{', '} 
          <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>flex-end</code>{', and '}
          <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>center</code>

        </p>

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
            width: "90%"
          }}
        >

          {`There are also two additional keywords you can pair with these values: `}
          <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>safe</code>{` and `}
          <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>unsafe</code>{`. Using `}
          <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>safe</code>
          {` ensures that however you do this type of positioning, 
            you can’t push an element such that it renders off-screen 
            (e.g. off the top) in such a way the content can’t be scrolled too (called “data loss”).`}

        </p>

			);
	}
}