import React from "react";

export default class SearchBar extends React.Component {
	render() {
		return (

				<div style={{display: "flex", marginLeft: "30px", paddingTop: "20px", paddingBottom: "15px"}}>

          <input type="search" style={{backgroundColor: "#201c29", color: "white", border: 0, fontSize: "100%", borderBottomLeftRadius: "27px", borderTopLeftRadius: "27px", paddingLeft: "20px", width: "270px"}} placeholder="e.g flexbox" />

          <button type="button" style={{background: "linear-gradient(90deg,#ff8a00,#e52e71)", color: "white", border: 0, padding: "0 22px 0 7px", width: "55px", borderTopRightRadius: "27px", borderBottomRightRadius: "27px", borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px"}}>
            {'search'}
          </button>

        </div>
        
			);
	}
}