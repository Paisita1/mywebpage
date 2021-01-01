import React from "react";

export class ListItem1 extends React.Component {
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
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>row</code>
            {' (default): left to right in '}
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>ltr</code>
            {'; right to left in '}
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>rtl</code>
          </span>

        </li>

			);
	}
}

export class ListItem2 extends React.Component {
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
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>row-reverse</code>
            {': right to left in '}
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>ltr</code>
            {'; left to right in '}
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>rtl</code>
          </span>

        </li>

      );
  }
}

export class ListItem3 extends React.Component {
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
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>column</code>
            {': same as '}
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>row</code>
            {' but top to bottom'}
          </span>

        </li>

      );
  }
}

export class ListItem4 extends React.Component {
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
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>column-reverse</code>
            {': same as '}
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>row-reverse</code>
            {' but bottom to top'}
          </span>

        </li>

      );
  }
}