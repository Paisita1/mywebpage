import React from "react";

export class Item1 extends React.Component {
	render() {
		return (

				<li style={{
            color: "#ff8a00",
            fontSize: ".9rem",
            textIndent: "-.3rem",
            marginBottom: "5px"
          }}
        >

          <span style={{
              fontSize: "1.3rem",
              marginLeft: "5px",
              color: "#2e2f3e"
            }}
          >
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>nowrap</code>
            {' (default): all flex items will be on one line'}
          </span>

        </li>

			);
	}
}

export class Item2 extends React.Component {
	render() {
		return (

				<li style={{
            color: "#ff8a00",
            fontSize: ".9rem",
            textIndent: "-.3rem",
            marginBottom: "5px"
          }}
        >

          <span style={{
              fontSize: "1.3rem",
              marginLeft: "5px",
              color: "#2e2f3e"
            }}
          >
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>wrap</code>
            {': flex items will wrap onto multiple lines, from top to bottom.'}
          </span>

        </li>

			);
	}
}

export class Item3 extends React.Component {
	render() {
		return (

				<li style={{
            color: "#ff8a00",
            fontSize: ".9rem",
            textIndent: "-.3rem",
            marginBottom: "5px"
          }}
        >

          <span style={{
              fontSize: "1.3rem",
              marginLeft: "5px",
              color: "#2e2f3e"
            }}
          >
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>wrap-reverse</code>
            {': flex items will wrap onto multiple lines from bottom to top.'}
          </span>

        </li>

			);
	}
}