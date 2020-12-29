import React from "react";

export default class Section2 extends React.Component {
	constructor(props) {
    super(props)

    this.state = {
      'childhoodSection': 'sup bruh',
    }
  }

  componentDidMount() {
    let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "name": "Isaac" })
    };

    fetch('http://localhost:3001/getChildhoodSection', requestOptions)
    .then(response => response.json())
    .then(res => this.setState({'childhoodSection': res.data}))
  }

	render() {
		return (
				<div>

					<h3 style= {{textAlign: "center"}}>Childhood</h3>
	        <p style= {{fontFamily: "sans-serif", borderBottom: "1px solid black", paddingBottom: "20px"}}>
	          {this.state.childhoodSection}
	        </p>

        </div>
			);
	}
}