import React from "react";

export default class DisplayText2 extends React.Component {
	render() {
		return (

				<p style={{
            fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
            fontSize: "1.3rem",
            margin: "0 0 1.5rem",
            maxWidth: "500px"
          }}
        >
          {'Note that CSS columns have no effect on a flex container.'}
        </p>

			);
	}
}