import react from "react";



function Footer()
{

    return(

        <footer className="rounded" style={{ backgroundImage: "url(./images/header.jpg)" }}>

        <div className="navbar navbar-light navbar-expand">
      <div className="container justify-content-center">

          <ul className="nav navbar-nav" >
            <li className="nav-item" >
              <a className="nav-link disabled"  href="A simple Manual">Docs</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link"  href="https://github.com/YigitSIK/Comp2Dust" title="View the GitHub project">GitHub</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled " >Examples</a>
            </li>
          </ul>

        </div>
      </div>
  


    </footer>

    )

}


export default Footer;