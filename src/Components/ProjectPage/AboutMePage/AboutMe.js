import React from "react";

class About extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      'whoAmISection': 'iono nigguh',
      'childhoodSection': 'sup bruh',
      'futureSection': 'lol theres nothing'
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

    fetch('http://localhost:3001/getChildhoodSection', requestOptions)
    .then(response => response.json())
    .then(res => this.setState({'childhoodSection': res.data}))

    fetch('http://localhost:3001/getFutureSection', requestOptions)
    .then(response => response.json())
    .then(res => this.setState({'futureSection': res.data}))
  }

  render(){
    return (
      <div style= {{width: "100%"}}>
        <div style= {{width: "50%", marginLeft: "auto", marginRight: "auto", border: "5px solid black",
                      borderRadius: "10px", padding: "20px"}}>
          <div style= {styles.pageHeaders}>
            <h2>About Me</h2>
          </div>
          <div style= {{display: "flex", justifyContent: "center", width: "100%"}}>
            <figure style= {{width: "100%", margin: "0"}}>
              <img src= {Isaac} alt= "Isaac" style= {{width: "100%"}}/>
              <figcaption style= {{fontSize: "12px"}}>Taken 10/15/2020 6:19pm; Random ass picture I took for this about me page.</figcaption>
            </figure>
          </div>
          <div style= {{width: "100%", marginRight: "auto", marginLeft: "auto"}}>

            <h3 style= {{textAlign: "center"}}>Who Am I?</h3>

            <p style= {{fontFamily: "sans-serif", borderBottom: "1px solid black", paddingBottom: "20px"}}>
              {this.state.whoAmISection}
            </p>

            <h3 style= {{textAlign: "center"}}>Childhood</h3>
            <p style= {{fontFamily: "sans-serif", borderBottom: "1px solid black", paddingBottom: "20px"}}>
              {this.state.childhoodSection}
            </p>
            <h3 style= {{textAlign: "center"}}>Future</h3>
            <p style= {{fontFamily: "sans-serif"}}>
              {this.state.futureSection}
            </p>
          </div>
        </div>
      </div>
    );
  }
}