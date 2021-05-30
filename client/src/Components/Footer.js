import react from "react";



function Footer()
{

    return(

        <footer className="rounded" style={{ backgroundImage: "url(./images/header.jpg)" }}>

        <div className="navbar navbar-light navbar-expand">
      <div className="container justify-content-center">

          <ul className="nav navbar-nav" >
            <li className="nav-item" >
              <a className="nav-link "  href="https://github.com/YigitSIK/Comp2Dust/tree/React2Dust/Documents">Docs</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link"  href="https://github.com/YigitSIK/Comp2Dust" >GitHub</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  " href="https://github.com/YigitSIK/Comp2Dust">Examples</a>
            </li>
          </ul>

        </div>
      </div>
  


    </footer>

    )

}


export default Footer;