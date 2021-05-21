import React from "react";
import Jumbotron from "./Components/Jumbotron";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Tools from "./Components/Tools";


function App() {
  return (
    <div>

    <div className="container rounded">

      <Jumbotron/>
      <Tools/>
      <Footer/>

      </div>
      
    </div>
  );
}

export default App;
