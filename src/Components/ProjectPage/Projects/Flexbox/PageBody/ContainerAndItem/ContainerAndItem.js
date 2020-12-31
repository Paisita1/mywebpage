import React from "react";

import {images} from '../../Assets/images.js';

import ContainerColumn from './ContainerColumn/ContainerColumn.js';

export default class ContainerAndChildren extends React.Component {
	render() {
		return (

				<div style={{display: "flex"}}>

            <ContainerColumn />

          {/* start of second column */}

            <div style={{display: "flex", flexFlow: "column", width: "50%"}}>

              <img src={images.items} style={{width: "75%"}} />

              <h2 style={{
                  fontSize: "2.5rem",
                  marginBottom: "0"
                }}
              >
                {'Properties for the Children'}
              </h2>

              <h2 style={{
                  fontSize: "2.5rem",
                  marginTop: "0"
                }}
              >
                {'(flex items)'}
              </h2>

              <div style={{
                  background: "linear-gradient(rgba(255,138,0,.2),#fff)",
                  padding: "2rem",
                  marginBottom: "5px"
                }}
              >

                <h2 style={{
                    margin: "0 0 .8rem",
                    fontFamily: "Ringside Regular A,Ringside Regular B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif",
                    fontSize: "1.8rem"
                  }}
                >
                  {'order'}
                </h2>

                <img src={images.itemsExample1} alt="picture" style={{width: "70%", marginBottom: "1.5rem"}} />

                <p style={{
                    fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                    fontSize: "1.3rem",
                    margin: "0 0 1.5rem"
                  }}
                >
                  {'By default, flex items are laid out in the source order. However, the '}
                  <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>order</code>
                  {' property controls the order in which they appear in the flex container.'}
                </p>

                <div style={{display: "flex", flexFlow: "column", backgroundColor: "#001628", padding: "18px 20px 20px 22px", borderRadius: "8px", marginBottom: "1.5rem"}}>
                  
                  <code style={{
                      color: "#72e0d1",
                    }}
                  >
                    <span style={{color: "#f5d67b"}}>.item</span> {' {'}
                  </code>

                  <code style={{
                      color: "#72e0d1",
                      margin: "10px 0 10px 15px"
                    }}
                  >
                    {'  order: '} <span style={{color: "#fc9463"}}>5</span>; <span style={{color: "#5e7671", fontStyle: "italic"}}>/* default is 0 */</span>
                  </code>

                  <code style={{
                      color: "#72e0d1",
                      margin: "0"
                    }}
                  >
                   {'}'}
                  </code>

                </div>

              </div>

              <div style={{
                  background: "linear-gradient(rgba(255,138,0,.2),#fff)",
                  padding: "2rem",
                  marginBottom: "5px"
                }}
              >

                <h2 style={{
                    margin: "0 0 .8rem",
                    fontFamily: "Ringside Regular A,Ringside Regular B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif",
                    fontSize: "1.8rem"
                  }}
                >
                  {'flex-grow'}
                </h2>

                <img src={images.itemsExample2} alt="img" style={{width: "70%", marginBottom: "50px"}} />

                <p style={{
                    fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                    fontSize: "1.3rem",
                    margin: "0 0 1.8rem",
                    width: "95%"
                  }}
                >
                  {`This defines the ability for a flex item to grow if necessary. 
                    It accepts a unitless value that serves as a proportion. 
                    It dictates what amount of the available space inside the flex container the item should take up.`}
                </p>

                <p style={{
                    fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                    fontSize: "1.3rem",
                    margin: "0 0 1.8rem",
                    width: "95%"
                  }}
                >
                  {`If all items have`}<code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>flex-grow</code>
                  {` set to 1, the remaining space in the container will be distributed equally to all children. 
                    If one of the children has a value of 2, the remaining space would take up twice as much space as the others 
                    (or it will try to, at least).`}
                </p>

                <div style={{display: "flex", flexFlow: "column", backgroundColor: "#001628", padding: "18px 20px 20px 22px", borderRadius: "8px", marginBottom: "1.5rem"}}>
                  
                  <code style={{
                      color: "#72e0d1",
                    }}
                  >
                    <span style={{color: "#f5d67b"}}>.item</span> {' {'}
                  </code>

                  <code style={{
                      color: "#72e0d1",
                      margin: "10px 0 10px 15px"
                    }}
                  >
                    {'  flex-grow: '} <span style={{color: "#fc9463"}}>4</span>; <span style={{color: "#5e7671", fontStyle: "italic"}}>/* default 0 */</span>
                  </code>

                  <code style={{
                      color: "#72e0d1",
                      margin: "0"
                    }}
                  >
                   {'}'}
                  </code>

                </div>

                <p style={{
                    fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                    fontSize: "1.3rem",
                    margin: "0 0 1.8rem",
                    width: "95%"
                  }}
                >
                  {`Negative numbers are invalid.`}
                </p>

              </div>

              <div style={{
                  background: "linear-gradient(rgba(255,138,0,.2),#fff)",
                  padding: "2rem",
                  marginBottom: "5px"
                }}
              >

                <h2 style={{
                    margin: "0 0 .8rem",
                    fontFamily: "Ringside Regular A,Ringside Regular B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif",
                    fontSize: "1.8rem"
                  }}
                >
                  {'flex-shrink'}
                </h2>

                <p style={{
                    fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                    fontSize: "1.3rem",
                    margin: "0 0 1.8rem",
                    width: "95%"
                  }}
                >
                  {`This defines the ability for a flex item to shrink if necessary.`}
                </p>

                <div style={{display: "flex", flexFlow: "column", backgroundColor: "#001628", padding: "18px 20px 20px 22px", borderRadius: "8px", marginBottom: "1.5rem"}}>
                  
                  <code style={{
                      color: "#72e0d1",
                    }}
                  >
                    <span style={{color: "#f5d67b"}}>.item</span> {' {'}
                  </code>

                  <code style={{
                      color: "#72e0d1",
                      margin: "10px 0 10px 15px"
                    }}
                  >
                    {'  flex-shrink: '} <span style={{color: "#fc9463"}}>3</span>; <span style={{color: "#5e7671", fontStyle: "italic"}}>/* default 1 */</span>
                  </code>

                  <code style={{
                      color: "#72e0d1",
                      margin: "0"
                    }}
                  >
                   {'}'}
                  </code>

                </div>

                <p style={{
                    fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                    fontSize: "1.3rem",
                    margin: "0 0 1.8rem",
                    width: "95%"
                  }}
                >
                  {`Negative numbers are invalid.`}
                </p>

              </div>

              <div style={{
                  background: "linear-gradient(rgba(255,138,0,.2),#fff)",
                  padding: "2rem",
                  marginBottom: "5px"
                }}
              >

                <h2 style={{
                    margin: "0 0 .8rem",
                    fontFamily: "Ringside Regular A,Ringside Regular B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif",
                    fontSize: "1.8rem"
                  }}
                >
                  {'flex-basis'}
                </h2>

                <p style={{
                    fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                    fontSize: "1.3rem",
                    margin: "0 0 1.8rem",
                    width: "100%"
                  }}
                >
                  {`This defines the default size of an element before the remaining space is distributed. 
                    It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The `}
                  <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>auto</code>
                  {` keyword means “look at my width or height property” (which was temporarily done by the `}
                  <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>main-size</code>
                  {` keyword until deprecated). The `}
                  <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>content</code>
                  {`keyword means “size it based on the item’s content” – this keyword isn’t well supported yet, 
                    so it’s hard to test and harder to know what its brethren `}
                  <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>max-content</code>
                  {`,`}<code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>min-content</code>
                  {`, and`}<code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>fit-content</code>
                  {` do`}
                </p>

                <div style={{display: "flex", flexFlow: "column", backgroundColor: "#001628", padding: "18px 20px 20px 22px", borderRadius: "8px", marginBottom: "1.5rem"}}>
                  
                  <code style={{
                      color: "#72e0d1",
                    }}
                  >
                    <span style={{color: "#f5d67b"}}>.item</span> {' {'}
                  </code>

                  <code style={{
                      color: "#72e0d1",
                      margin: "10px 0 10px 15px"
                    }}
                  >
                    {'  flex-basis: '} <span style={{color: "#f5d67b", marginLeft: "10px"}}>| auto</span>; <span style={{color: "#5e7671", fontStyle: "italic"}}>/* default auto */</span>
                  </code>

                  <code style={{
                      color: "#72e0d1",
                      margin: "0"
                    }}
                  >
                   {'}'}
                  </code>

                </div>

                <p style={{
                    fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                    fontSize: "1.3rem",
                    margin: "0 0 1.8rem",
                    width: "83%"
                  }}
                >
                  {`If set to `}<code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>0</code>
                  {`, the extra space around content isn’t factored in. If set to `}
                  <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>auto</code>
                  {`, the extra space is distributed based on its `}
                  <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>flex-grow</code>
                  {`value. `}
                  <span className="textHover" style={{
                      textDecoration: "underline",
                      textDecorationColor: "#a2dffb",
                      color: "#007db5",
                    }}
                  >
                    See this graphic
                  </span>.
                </p>

              </div>

            </div>

          </div>

			);
	}
}