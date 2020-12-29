import React from "react";

export default class Section3 extends React.Component {
	constructor(props) {
    super(props)

    this.state = {
      'futureSection': 'lol theres nothing'
    }
  }

  componentDidMount() {
    let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "name": "Isaac" })
    };

    fetch('http://localhost:3001/getFutureSection', requestOptions)
    .then(response => response.json())
    .then(res => this.setState({'futureSection': res.data}))
  }

	render() {
		return (
				<div>

					<h3 style= {{textAlign: "center"}}>Future</h3>
          <p style= {{fontFamily: "sans-serif"}}>
            {this.state.futureSection}
          </p>

				</div>
			);
	}
}