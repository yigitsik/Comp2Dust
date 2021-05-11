import React from "react";

function Jumbotron() {
  return (

    <div className="jumbotron jumbotron-fluid" >

    <header className="navbar navbar-light navbar-expand-md">
      <div className="container">
        <a className="navbar-brand" ><h1>Comp2Dust</h1> <small className="h6">v1.0.1</small> </a>
        <div className="collapse navbar-collapse justify-content-end" id="navbar-collapse" role="navigation">
          <ul className="nav navbar-nav" >
            <li className="nav-item" >
              <a className="nav-link disabled"  href="A simple Manual">Docs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled " >Examples</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link"  href="https://github.com/YigitSIK/Comp2Dust" title="View the GitHub project">GitHub</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link disabled"  href="This part will be an explanation about algs" title="Explore more projects">Explore</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link disabled"  href="Explanation of the project" title="About the author">About</a>
            </li>
          </ul>
        </div>
      </div>
  
    </header>
  
  </div>

);
}

export default Jumbotron;
