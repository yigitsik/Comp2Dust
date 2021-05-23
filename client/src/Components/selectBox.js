import React from 'react'
import $ from 'jquery'

function SelectBox (){

    function handleChange(e)
    {

        console.log($(e.target).val())

        // console.log(e.target.name)

        // console.log($("#commandJpg").text())

        // $("#commandJpg").value = $("#commandJpg").text() ;

        // console.log($("#commandJpg").val())
        // if($(e.target).val()=="mozjpeg")
        // {
        //  commands = ["-grayscale"]
        // }

        
        // var kits = ["Lego WeDo", "Force & Motion", "Bernoulli's Lift"];
        // var starLabs = ["Constellations", "Starfields", "Moon"];

        // for (var i = 0; i < commands.length; i++) {

        // $("#jpgCommand option")[i].innerHTML= kits[i];
        // let name = $("#jpgCommand option")[i].innerHTML= commands[i];
        // $("#jpgCommand option")[i].value = name;
          
        // }
        
        
    }
    

        return(
            <div>
                <div className="row">   
                    <div className="col-md-6 offset-md-1" id="optionBox">
                                                
                           <div className="form-row d-flex">

                                <div className="form-group col-6 mb-3">
                                    <label><h6>JPG Engine</h6></label>
                                    <select className="form-control" name="JPG" onChange={handleChange} >
                                        <option defaultValue="mozjpeg">mozjpeg</option>
                                        <option value="jpegtran">jpegtran</option>
                                        <option value="webp">webp</option>
                                        <option value="guetzli">guetzli</option>
                                        <option value="jpegRecompress">jpegRecompress</option>
                                        <option value="jpegoptim">jpegoptim</option>
                                    </select>
                                </div>

                                <div className="form-group col-12 mb-3 mx-3" >
                                    <label><h6>Command</h6></label>
                                    <input className="form-control" type="text" name="commandJPG" id="commandJPG" onKeyUp={handleChange} />
                                </div>

                            </div>

                            <div className="form-row d-flex">
                                <div className="form-group col-6 mb-3">
                                    <label><h6>PNG Engine</h6></label>
                                    <select className="form-control" name="PNG" onChange={handleChange}>
                                        <option defaultValue>pngquant</option>
                                        <option value="optipng">optipng</option>
                                        <option value="pngout">pngout</option>
                                        <option value="webp">webp</option>
                                        <option value="pngcrush">pngcrush</option>
                                    </select>
                                </div>

                                <div className="form-group col-12 mb-3 mx-3" >
                                    <label><h6>Command</h6></label>
                                    <input className="form-control" type="text" name="commandPNG" id="commandPNG" onKeyUp={handleChange} />
                                </div>

                            </div>

                            <div className="form-row d-flex">
                                <div className="form-group col-6 mb-3">
                                    <label><h6>SVG Engine</h6></label>
                                    <select className="form-control" name="SVG" >
                                        <option defaultValue>svgo</option>
                                    </select>
                                </div>

                                <div className="form-group col-12 mb-3 mx-3" >
                                    <label><h6>Command</h6></label>
                                    <input className="form-control" type="text" name="commandSVG" id="commandSVG" onKeyUp={handleChange} />
                                </div>

                            </div>

                            <div className="form-row d-flex">
                                <div className="form-group col-6 mb-3">
                                    <label><h6>GIF Engine</h6></label>
                                    <select className="form-control" name="GIF" >
                                        <option defaultValue>gifsicle</option>
                                        <option value="giflossy">giflossy</option>
                                        <option value="gif2webp">gif2webp</option>
                                    </select>
                                </div>

                                <div className="form-group col-12 mb-3 mx-3" >
                                    <label><h6>Command</h6></label>
                                    <input className="form-control" type="text" name="commandGIF" id="commandGIF" onKeyUp={handleChange} />
                                </div>

                            </div>
                        
                    </div>
                </div>
            </div>
        )  
    
}

export default SelectBox;