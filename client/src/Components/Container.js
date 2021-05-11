import React from "react";
import InfoBox from "./InfoBox";
import Input from "./Input";
import ImageContainer from "./ImageContainer";
import Options from "./Options";
import Displayer from "./Displayer";

function Container()
{

   return(

    <div className="container">

    <InfoBox/>

    <Input/>

    <div className="row">

    <ImageContainer/>

    <Options/>

    <Displayer/>

    <Displayer/>

    </div>

    </div>

   )

}


export default Container;