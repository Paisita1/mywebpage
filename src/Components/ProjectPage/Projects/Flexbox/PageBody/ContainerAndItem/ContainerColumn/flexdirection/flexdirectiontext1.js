import React from "react";

export default class FlexDirectionText1 extends React.Component {
	render() {
		return (

				<p style={{
            fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
            fontSize: "1.3rem",
            margin: "0 0 1.8rem",
            width: "95%"
          }}
        >
          {`This establishes the main-axis, thus defining the direction flex items are placed in the flex container. 
            Flexbox is (aside from optional wrapping) a single-direction layout concept. 
            Think of flex items as primarily laying out either in horizontal rows or vertical columns.`}
        </p>

			);
	}
}