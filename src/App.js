import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import './App.css';
import HomePage from './Components/Homepage/Homepage.js';
import ProjectPage from './Components/ProjectPage/ProjectPage.js';
import AboutMe from './Components/ProjectPage/AboutMePage/AboutMe.js';

import container from './divcontainer.svg';
import items from './divitems.svg';
import itemsExample1 from './itemsimg1.svg';
import containerExample1 from './containerimg1.svg';
import itemsExample2 from './itemsimg2.svg';
import flexWrap from './flex-wrap.svg';
import justifyContent from './justify-content.svg';

const styles = {};

export default class MyWebsite extends React.Component {
  render() {
    return (

        <Router>
          <Switch>

            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/projects">
              <ProjectPage />
            </Route>

            <Route path="/flexboxpage">
              <Flexbox />
            </Route>

            <Route path="/aboutme">
              <AboutMe />
            </Route>

          </Switch>
        </Router>

      )
  }
}

class Flexbox extends React.Component {
  render() {
    return (
        <div style={{display: "flex", flexDirection: "column", backgroundColor: "black"}}>

          <div style={{display: "flex", margin: "27px 0", width: "100%", borderBottom: "1px solid orange", paddingBottom: "15px", paddingLeft: "50px"}}>

            <div style={{
                borderRight: '1px solid rgb(32, 28, 41)',
                /*marginRight: '10px',*/
                paddingRight: '10px',
              }}
            >
                <h2 style={{color: "white", marginBottom: "15px", fontSize: "2em"}}>
                  {'CSS-TRICKS'}
                </h2>
              
            </div>

            <div style={{display: "flex", fontFamily: "Ringside Regular A,Ringside Regular B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif", fontWeight: "600"}}>
              <a className="flexBar" href="" target="_blank" style={styles.navBarItems}>{'Articles'}</a>
              <a className="flexBar" href="" target="_blank" style={styles.navBarItems}>{'Videos'}</a>
              <a className="flexBar" href="" target="_blank" style={styles.navBarItems}>{'Almanic'}</a>
              <a className="flexBar" href="" target="_blank" style={styles.navBarItems}>{'Newsletter'}</a>
              <a className="flexBar" href="" target="_blank" style={styles.navBarItems}>{'Guides'}</a>
              <a className="flexBar" href="" target="_blank" style={styles.navBarItems}>{'Books'}</a>
              <a className="flexBar" href="" target="_blank" style={styles.navBarItems}>{'Account'}</a>
            </div>

            <div style={{display: "flex", marginLeft: "30px", paddingTop: "20px", paddingBottom: "15px"}}>

              <input type="search" style={{backgroundColor: "#201c29", color: "white", border: 0, fontSize: "100%", borderBottomLeftRadius: "27px", borderTopLeftRadius: "27px", paddingLeft: "20px", width: "270px"}} placeholder="e.g flexbox" />

              <button type="button" style={{background: "linear-gradient(90deg,#ff8a00,#e52e71)", color: "white", border: 0, padding: "0 22px 0 7px", width: "55px", borderTopRightRadius: "27px", borderBottomRightRadius: "27px", borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px"}}>
                {'search'}
              </button>

            </div>

          </div>

          <div style={{paddingLeft: "50px"}}>

            <div style={{color: "grey"}}>
              {'Guide'}
            </div>

            <h1 style={{
                color: "white",
                fontFamily: "Ringside Regular A,Ringside Regular B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif",
                fontSize: "2.5rem",
                margin: "0 0 1.5rem"
              }}
            >
              {'A Complete Guide to Flexbox'}
            </h1>

            <div style={{margin: "0 0 1.5rem"}}>

              <div style={{
                  color: "#7a7a8c",
                  fontFamily: "Ringside Regular A,Ringside Regular B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif",
                  fontSize: ".7rem",
                  marginBottom: "3px"
                }}
              >
                {'Last Updated'}
              </div>

              <div style={{
                  color: "white",
                  fontSize: ".9rem"
                }}
              >
                {'Oct 22, 2020'}
              </div>

            </div>

            <div style={{maxWidth: "590px"}}>

            <p style={{
                color: "#c2c2c2",
                fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                fontSize: "1.3rem",
                margin: "0 0 1.5rem"
              }}
            >
              {`Our comprehensive guide to CSS flexbox layout. This complete guide explains everything 
                about flexbox, focusing on all the different possible properties for the parent element (the flex container) 
                and the child elements (the flex items). It also includes history, demos, patterns, and a browser support chart.`}
            </p>

            </div>

          </div>

          <div style={{
              backgroundColor: "White",
              padding: "1rem 1rem 1rem 50px"
            }}
          >

            <div>

              <h3 style={{
                  
                }}
              >
                <a className="textLinks" href="" style={{
                    color: "black",
                    textDecoration: "none",
                    fontFamily: "Ringside Regular A,Ringside Regular B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif",
                    fontSize: "2.2rem",
                    fontWeight: "700",
                    textDecoration: "underline",
                    textDecorationColor: "#a2dffb"
                  }}
                >{'Background'}</a>
              </h3>

              <h3>
                <a className="textLinks" href="" style={{
                      color: "black",
                      textDecoration: "none",
                      fontFamily: "Ringside Regular A,Ringside Regular B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif",
                      fontSize: "2.2rem",
                      fontWeight: "700",
                      textDecoration: "underline",
                      textDecorationColor: "#a2dffb"
                    }}
                  >{'Basics & Terminology'}</a>
              </h3>

            </div>

            <div style={{display: "flex"}}>

              <div style={{display: "flex", flexFlow: "column", width: "50%", paddingRight: "30px"}}>

                <img src={container} style={{width: "75%"}} />

                <h2 style={{
                    fontSize: "2.5rem",
                    marginBottom: "0"
                  }}
                >
                  {'Properties for the Parent'}
                </h2>

                <h2 style={{
                    fontSize: "2.5rem",
                    marginTop: "0"
                  }}
                >
                  {'(flex container)'}
                </h2>

                <div style={{
                    background: "linear-gradient(rgba(156,39,176,.2),#fff)",
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
                    {'display'}
                  </h2>

                  <p style={{
                      fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                      fontSize: "1.3rem",
                      margin: "0 0 1.5rem"
                    }}
                  >
                    {`This defines a flex container; inline or block depending on the given value. 
                      It enables a flex context for all its direct children.`}
                  </p>

                  <div style={{display: "flex", flexFlow: "column", backgroundColor: "#001628", padding: "18px 20px 20px 22px", borderRadius: "8px", marginBottom: "1.5rem", maxWidth: "525px"}}>
                    
                    <code style={{
                        color: "#72e0d1",
                      }}
                    >
                      <span style={{color: "#f5d67b"}}>.container</span> {' {'}
                    </code>

                    <code style={{
                        color: "#72e0d1",
                        margin: "10px 0 10px 15px"
                      }}
                    >
                      {'  display:'} <span style={{color: "#f5d67b"}}>flex</span>; <span style={{color: "#5e7671", fontStyle: "italic"}}>/* or inline-flex */</span>
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
                      margin: "0 0 1.5rem",
                      maxWidth: "500px"
                    }}
                  >
                    {'Note that CSS columns have no effect on a flex container.'}
                  </p>

                </div>

                <div style={{
                    background: "linear-gradient(rgba(156,39,176,.2),#fff)",
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
                    {'flex-direction'}
                  </h2>

                  <img src={containerExample1} alt="img" style={{width: "70%", marginBottom: "3rem"}} />

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

                  <div style={{
                      display: "flex",
                      flexFlow: "column",
                      backgroundColor: "#001628",
                      padding: "18px 20px 20px 22px",
                      borderRadius: "8px",
                      marginBottom: "1.5rem",
                      maxWidth: "525px",
                      overflowX: "scroll",
                    }}
                  >
                      
                    <code style={{
                        color: "#72e0d1",
                      }}
                    >
                      <span style={{color: "#f5d67b"}}>.container</span> {' {'}
                    </code>

                    <code style={{
                        color: "#72e0d1",
                        margin: "10px 0 10px 15px",
                        minWidth: "600px",
                      }}
                    >
                      {'  flex-direction:'} <span style={{color: "#f5d67b"}}>row | row-reverse | column | column-reverse</span>;
                    </code>

                    <code style={{
                        color: "#72e0d1",
                        margin: "0"
                      }}
                    >
                     {'}'}
                    </code>

                  </div>

                  <ul style={{
                      fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                      fontSize: "1.3rem",
                      margin: "0 0 1.5rem",
                      lineHeight: "1.5",
                      maxWidth: "460px"
                    }}
                  >

                    <li style={{
                        color: "#ff8a00",
                        fontSize: ".9rem",
                        textIndent: "-.3rem",
                        marginBottom: "5px"
                      }}
                    >

                      <span style={{
                          fontSize: "1.3rem",
                          marginLeft: "5px",
                          color: "#2e2f3e"
                        }}
                      >
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>row</code>
                        {' (default): left to right in '}
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>ltr</code>
                        {'; right to left in '}
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>rtl</code>
                      </span>

                    </li>
                    <li style={{
                        color: "#ff8a00",
                        fontSize: ".9rem",
                        textIndent: "-.3rem",
                        marginBottom: "5px"
                      }}
                    >

                      <span style={{
                          fontSize: "1.3rem",
                          marginLeft: "5px",
                          color: "#2e2f3e"
                        }}
                      >
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>row-reverse</code>
                        {': right to left in '}
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>ltr</code>
                        {'; left to right in '}
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>rtl</code>
                      </span>

                    </li>
                    <li style={{
                        color: "#ff8a00",
                        fontSize: ".9rem",
                        textIndent: "-.3rem",
                        marginBottom: "5px"
                      }}
                    >

                      <span style={{
                          fontSize: "1.3rem",
                          marginLeft: "5px",
                          color: "#2e2f3e"
                        }}
                      >
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>column</code>
                        {': same as '}
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>row</code>
                        {' but top to bottom'}
                      </span>

                    </li>
                    <li style={{
                        color: "#ff8a00",
                        fontSize: ".9rem",
                        textIndent: "-.3rem",
                        marginBottom: "5px"
                      }}
                    >

                      <span style={{
                          fontSize: "1.3rem",
                          marginLeft: "5px",
                          color: "#2e2f3e"
                        }}
                      >
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>column-reverse</code>
                        {': same as '}
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>row-reverse</code>
                        {' but bottom to top'}
                      </span>

                    </li>

                  </ul>

                </div>

                <div style={{
                    background: "linear-gradient(rgba(156,39,176,.2),#fff)",
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
                    {'flex-wrap'}
                  </h2>

                  <img src={flexWrap} alt="img" style={{width: "70%", marginBottom: "25px"}} />

                  <p style={{
                      fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                      fontSize: "1.3rem",
                      margin: "0 0 1.8rem",
                      width: "90%"
                    }}
                  >
                    {`By default, flex items will all try to fit onto one line. 
                      You can change that and allow the items to wrap as needed with this property.`}
                  </p>

                  <div style={{
                      display: "flex",
                      flexFlow: "column",
                      backgroundColor: "#001628",
                      padding: "18px 20px 20px 22px",
                      borderRadius: "8px",
                      marginBottom: "1.5rem",
                    }}
                  >
                      
                    <code style={{
                        color: "#72e0d1",
                      }}
                    >
                      <span style={{color: "#f5d67b"}}>.container</span> {' {'}
                    </code>

                    <code style={{
                        color: "#72e0d1",
                        margin: "10px 0 10px 15px",
                      }}
                    >
                      {'  flex-wrap: '} <span style={{color: "#f5d67b"}}>nowrap | wrap | wrap-reverse</span>;
                    </code>

                    <code style={{
                        color: "#72e0d1",
                        margin: "0"
                      }}
                    >
                     {'}'}
                    </code>

                  </div>

                  <ul style={{
                      fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                      fontSize: "1.3rem",
                      margin: "0 0 1.5rem",
                      lineHeight: "1.5",
                      maxWidth: "470px"
                    }}
                  >

                    <li style={{
                        color: "#ff8a00",
                        fontSize: ".9rem",
                        textIndent: "-.3rem",
                        marginBottom: "5px"
                      }}
                    >

                      <span style={{
                          fontSize: "1.3rem",
                          marginLeft: "5px",
                          color: "#2e2f3e"
                        }}
                      >
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>nowrap</code>
                        {' (default): all flex items will be on one line'}
                      </span>

                    </li>

                    <li style={{
                        color: "#ff8a00",
                        fontSize: ".9rem",
                        textIndent: "-.3rem",
                        marginBottom: "5px"
                      }}
                    >

                      <span style={{
                          fontSize: "1.3rem",
                          marginLeft: "5px",
                          color: "#2e2f3e"
                        }}
                      >
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>wrap</code>
                        {': flex items will wrap onto multiple lines, from top to bottom.'}
                      </span>

                    </li>

                    <li style={{
                        color: "#ff8a00",
                        fontSize: ".9rem",
                        textIndent: "-.3rem",
                        marginBottom: "5px"
                      }}
                    >

                      <span style={{
                          fontSize: "1.3rem",
                          marginLeft: "5px",
                          color: "#2e2f3e"
                        }}
                      >
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>wrap-reverse</code>
                        {': flex items will wrap onto multiple lines from bottom to top.'}
                      </span>

                    </li>

                  </ul>

                  <p style={{
                      fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                      fontSize: "1.3rem",
                      margin: "0 0 1.8rem",
                      width: "90%"
                    }}
                  >
                    {`There are some `}
                    <span className="textHover" style={{
                        textDecoration: "underline",
                        textDecorationColor: "#a2dffb",
                        color: "#007db5",
                      }}
                    >
                      visual demos of flex-wrap here
                    </span>
                    {`.`}
                  </p>

                </div>

                <div style={{
                    background: "linear-gradient(rgba(156,39,176,.2),#fff)",
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
                    {'justify-content'}
                  </h2>

                  <img src={justifyContent} alt="img" style={{width: "58%", marginBottom: "25px"}} />

                  <p style={{
                      fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                      fontSize: "1.3rem",
                      margin: "0 0 1.8rem",
                      width: "80%"
                    }}
                  >
                    {`This defines the alignment along the main axis. 
                      It helps distribute extra free space leftover when either all the 
                      flex items on a line are inflexible, 
                      or are flexible but have reached their maximum size. 
                      It also exerts some control over the alignment of items when they overflow the line.`}
                  </p>

                  <div style={{
                      display: "flex",
                      flexFlow: "column",
                      backgroundColor: "#001628",
                      padding: "18px 20px 20px 22px",
                      borderRadius: "8px",
                      marginBottom: "1.5rem",
                      maxWidth: "525px",
                      overflowX: "scroll",
                    }}
                  >
                      
                    <code style={{
                        color: "#72e0d1",
                      }}
                    >
                      <span style={{color: "#f5d67b"}}>.container</span> {' {'}
                    </code>

                    <code style={{
                        color: "#72e0d1",
                        margin: "10px 0 10px 15px",
                        minWidth: "1260px"
                      }}
                    >
                      {'  justify-content: '}
                      <span style={{color: "#f5d67b"}}>flex-start | flex-end | center | 
                      space-between | space-around | space-evenly | start | end | left | right 
                      <span style={{color: "#fc9463"}}>...</span><span style={{color: "#aa7ee1"}}> + </span>
                      safe | unsafe</span>;
                    </code>

                    <code style={{
                        color: "#72e0d1",
                        margin: "0"
                      }}
                    >
                     {'}'}
                    </code>

                  </div>

                  <ul style={{
                      fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                      fontSize: "1.3rem",
                      margin: "0 0 1.5rem",
                      lineHeight: "1.5",
                      maxWidth: "490px"
                    }}
                  >

                    <li style={{
                        color: "#ff8a00",
                        fontSize: ".9rem",
                        textIndent: "-.3rem",
                        marginBottom: "5px"
                      }}
                    >

                      <span style={{
                          fontSize: "1.3rem",
                          marginLeft: "5px",
                          color: "#2e2f3e"
                        }}
                      >
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>flex-start</code>
                        {' (default): items are packed toward the start of the flex-direction.'}
                      </span>

                    </li>

                    <li style={{
                        color: "#ff8a00",
                        fontSize: ".9rem",
                        textIndent: "-.3rem",
                        marginBottom: "5px"
                      }}
                    >

                      <span style={{
                          fontSize: "1.3rem",
                          marginLeft: "5px",
                          color: "#2e2f3e"
                        }}
                      >
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>flex-end</code>
                        {': items are packed toward the end of the flex-direction.'}
                      </span>

                    </li>

                    <li style={{
                        color: "#ff8a00",
                        fontSize: ".9rem",
                        textIndent: "-.3rem",
                        marginBottom: "5px"
                      }}
                    >

                      <span style={{
                          fontSize: "1.3rem",
                          marginLeft: "5px",
                          color: "#2e2f3e"
                        }}
                      >
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>start</code>
                        {': items are packed toward the start of the '}
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>writing-mode</code>
                        {' direction'}
                      </span>

                    </li>

                    <li style={{
                        color: "#ff8a00",
                        fontSize: ".9rem",
                        textIndent: "-.3rem",
                        marginBottom: "5px"
                      }}
                    >

                      <span style={{
                          fontSize: "1.3rem",
                          marginLeft: "5px",
                          color: "#2e2f3e"
                        }}
                      >
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>end</code>
                        {': items are packed toward the end of the '}
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>writing-mode</code>
                        {' direction'}
                      </span>

                    </li>

                    <li style={{
                        color: "#ff8a00",
                        fontSize: ".9rem",
                        textIndent: "-.3rem",
                        marginBottom: "5px"
                      }}
                    >

                      <span style={{
                          fontSize: "1.3rem",
                          marginLeft: "5px",
                          color: "#2e2f3e"
                        }}
                      >
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>left</code>
                        {': items are packed toward left edge of the container, unless that doesn’t make sense with the '}
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>flex-direction</code>
                        {', then it behaves like '}
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>start</code>
                      </span>

                    </li>

                    <li style={{
                        color: "#ff8a00",
                        fontSize: ".9rem",
                        textIndent: "-.3rem",
                        marginBottom: "5px"
                      }}
                    >

                      <span style={{
                          fontSize: "1.3rem",
                          marginLeft: "5px",
                          color: "#2e2f3e"
                        }}
                      >
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>right</code>
                        {': items are packed toward right edge of the container, unless that doesn’t make sense with the '}
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>flex-direction</code>
                        {', then it behaves like '}
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>start</code>
                      </span>

                    </li>

                    <li style={{
                        color: "#ff8a00",
                        fontSize: ".9rem",
                        textIndent: "-.3rem",
                        marginBottom: "5px"
                      }}
                    >

                      <span style={{
                          fontSize: "1.3rem",
                          marginLeft: "5px",
                          color: "#2e2f3e"
                        }}
                      >
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>center</code>
                        {': items are centered along the line'}
                      </span>

                    </li>

                    <li style={{
                        color: "#ff8a00",
                        fontSize: ".9rem",
                        textIndent: "-.3rem",
                        marginBottom: "5px"
                      }}
                    >

                      <span style={{
                          fontSize: "1.3rem",
                          marginLeft: "5px",
                          color: "#2e2f3e"
                        }}
                      >
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>space-between</code>
                        {`: items are evenly distributed in the line; 
                          first item is on the start line, last item on the end line`}
                      </span>

                    </li>

                    <li style={{
                        color: "#ff8a00",
                        fontSize: ".9rem",
                        textIndent: "-.3rem",
                        marginBottom: "5px"
                      }}
                    >

                      <span style={{
                          fontSize: "1.3rem",
                          marginLeft: "5px",
                          color: "#2e2f3e"
                        }}
                      >
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>space-around</code>
                        {`: items are evenly distributed in the line with equal space around them. 
                          Note that visually the spaces aren’t equal, 
                          since all the items have equal space on both sides. 
                          The first item will have one unit of space against the container edge, 
                          but two units of space between the next item because that next item has its own spacing that applies.`}
                      </span>

                    </li>

                    <li style={{
                        color: "#ff8a00",
                        fontSize: ".9rem",
                        textIndent: "-.3rem",
                        marginBottom: "5px"
                      }}
                    >

                      <span style={{
                          fontSize: "1.3rem",
                          marginLeft: "5px",
                          color: "#2e2f3e"
                        }}
                      >
                        <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>space-evenly</code>
                        {`: items are distributed so that the spacing between any two items 
                          (and the space to the edges) is equal.`}
                      </span>

                    </li>

                  </ul>

                  <p style={{
                      fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                      fontSize: "1.3rem",
                      margin: "0 0 1.8rem",
                      width: "84%"
                    }}
                  >

                    {`Note that that browser support for these values is nuanced. For example, `}
                    <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>space-between</code>
                    {` never got support from some versions of Edge, and start/end/left/right aren’t in Chrome yet. MDN `}
                    <span className="textHover" style={{
                        textDecoration: "underline",
                        textDecorationColor: "#a2dffb",
                        color: "#007db5",
                      }}
                    >
                     has detailed charts
                    </span>
                    {`. The safest values are `}
                    <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>flex-start</code>{', '} 
                    <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>flex-end</code>{', and '}
                    <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>center</code>

                  </p>

                  <p style={{
                      fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                      fontSize: "1.3rem",
                      margin: "0 0 1.8rem",
                      width: "90%"
                    }}
                  >

                    {`There are also two additional keywords you can pair with these values: `}
                    <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>safe</code>{` and `}
                    <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>unsafe</code>{`. Using `}
                    <code style={{padding: ".1rem .3rem .2rem",backgroundColor: "#fff6ea"}}>safe</code>
                    {` ensures that however you do this type of positioning, 
                      you can’t push an element such that it renders off-screen 
                      (e.g. off the top) in such a way the content can’t be scrolled too (called “data loss”).`}

                  </p>

                </div>

              </div>

            {/* start of second column */}

              <div style={{display: "flex", flexFlow: "column", width: "50%"}}>

                <img src={items} style={{width: "75%"}} />

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

                  <img src={itemsExample1} alt="picture" style={{width: "70%", marginBottom: "1.5rem"}} />

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

                  <img src={itemsExample2} alt="img" style={{width: "70%", marginBottom: "50px"}} />

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

          </div>

        </div>
      );
  }
}

styles.navBarItems = {
    display: "flex",
    alignItems: "flex-end",
    color: "white",
    textDecoration: "none",
    marginLeft: "10px",
    borderRight: "1px solid #201c29",
    paddingRight: "10px",
    paddingBottom: "5px",
    fontSize: "13px",
}
