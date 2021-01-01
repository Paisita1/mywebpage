import React from "react";

import PageHeader from './PageHeader/PageHeader.js';
import PageBody from './PageBody/PageBody.js';

const styles = {}

export default class Flexbox extends React.Component {
  render() {
    return (
        <div style={{display: "flex", flexDirection: "column", backgroundColor: "black", width: "100%"}}>

        	<PageHeader />

          <PageBody />

        </div>
      );
  }
}