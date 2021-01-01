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
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>flex-start</code>
            {' (default): items are packed toward the start of the flex-direction.'}
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
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>flex-end</code>
            {': items are packed toward the end of the flex-direction.'}
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
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>start</code>
            {': items are packed toward the start of the '}
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>writing-mode</code>
            {' direction'}
          </span>

        </li>

			);
	}
}

export class Item4 extends React.Component {
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
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>end</code>
            {': items are packed toward the end of the '}
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>writing-mode</code>
            {' direction'}
          </span>

        </li>

			);
	}
}

export class Item5 extends React.Component {
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
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>left</code>
            {': items are packed toward left edge of the container, unless that doesn’t make sense with the '}
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>flex-direction</code>
            {', then it behaves like '}
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>start</code>
          </span>

        </li>

			);
	}
}

export class Item6 extends React.Component {
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
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>right</code>
            {': items are packed toward right edge of the container, unless that doesn’t make sense with the '}
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>flex-direction</code>
            {', then it behaves like '}
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>start</code>
          </span>

        </li>

			);
	}
}

export class Item7 extends React.Component {
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
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>center</code>
            {': items are centered along the line'}
          </span>

        </li>

			);
	}
}

export class Item8 extends React.Component {
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
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>space-between</code>
            {`: items are evenly distributed in the line; 
              first item is on the start line, last item on the end line`}
          </span>

        </li>

			);
	}
}

export class Item9 extends React.Component {
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
		        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>space-around</code>
		        {`: items are evenly distributed in the line with equal space around them. 
		          Note that visually the spaces aren’t equal, 
		          since all the items have equal space on both sides. 
		          The first item will have one unit of space against the container edge, 
		          but two units of space between the next item because that next item has its own spacing that applies.`}
		      </span>

		    </li>

			);
	}
}

export class Item10 extends React.Component {
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
            <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>space-evenly</code>
            {`: items are distributed so that the spacing between any two items 
              (and the space to the edges) is equal.`}
          </span>

        </li>

			);
	}
}