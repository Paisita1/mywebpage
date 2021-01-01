import React from "react";

import {
  ListItem1,
  ListItem2,
  ListItem3,
  ListItem4
} from './listitems.js';

export default class FlexDirectionList extends React.Component {
	render() {
		return (

				<ul style={{
            fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
            fontSize: "1.3rem",
            margin: "0 0 1.5rem",
            lineHeight: "1.5",
            maxWidth: "460px"
          }}
        >

          <ListItem1 />

          <ListItem2 />

          <ListItem3 />

          <ListItem4 />

        </ul>

			);
	}
}