import React from "react";
import Jumbotron from "./Components/Jumbotron";
import Footer from "./Components/Footer";
import Tools from "./Components/Tools";


function App() {
  return (
    <div>

    <div className="container rounded">

      <Jumbotron/>                               {/* Header of the site */}
      <Tools/>                                   {/* This is where magic happens */}
      <Footer/>                                  {/* Bottom part of the site */}

      </div>
      
    </div>
  );
}

export default App;
