import React from "react";

export default class Section1 extends React.Component {
	constructor(props) {
    super(props)

    this.state = {
      'whoAmISection': 'iono nigguh',
    }
  }

  componentDidMount() {
    let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "name": "Isaac" })
    };

    fetch('http://localhost:3001/getWhoAmISection', requestOptions)
    .then(response => response.json())
    .then(res => this.setState({'whoAmISection': res.data}));
  }

	render() {
		return (
				<div>

					<h3 style= {{textAlign: "center"}}>Who Am I?</h3>
        	<p style= {{fontFamily: "sans-serif", borderBottom: "1px solid black", paddingBottom: "20px"}}>
          	{this.state.whoAmISection}
        	</p>

				</div>
			)
	}
}