import React from 'react'
import {Card,Accordion,Button,OverlayTrigger,Tooltip} from 'react-bootstrap'
import $ from 'jquery'
import Info from './Info'

function SelectBox (){

    function handleChange(e)
    {

        // console.log($(e.target).val())
        
    }
    

        return(
            <div>
                <div >   

                <Info/>

               
                        <div className=" text-center m-3 p-2">

                        
                     <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip id="button-tooltip-2"><strong>You can check the manual or leave them empty for default values</strong></Tooltip>}
                     >
                        {({ ref, ...triggerHandler }) => (
                        <Button
                            variant="light"
                            {...triggerHandler}
                            className="d-inline-flex align-items-center"
                        >
                            <div ref={ref}>
                            <a href="google.com">What are the commands?</a>
                        
                            </div>
                        </Button>
                        )}
                    </OverlayTrigger>

                    </div>
                
                    <div className="col-md-6 offset-md-1" id="optionBox">
                    
                                        
                           <div className="form-row d-flex">

                                <div className="form-group col-md-6 mb-3">
                                    <label><h6>JPG Engine</h6></label>
                                    <select className="form-control" name="JPG" onChange={handleChange} >
                                        <option defaultValue="mozjpeg">mozjpeg</option>
                                        <option value="jpegtran">jpegtran</option>
                                        {/* <option value="webp">webp</option> */}
                                        {/* <option value="guetzli">guetzli</option> */}
                                        {/* <option value="jpegRecompress">jpegRecompress</option> */}
                                        {/* <option value="jpegoptim">jpegoptim</option> */}
                                    </select>
                                </div>

                                <div className="form-group col-md-12 mb-3 mx-3" >
                                    <label><h6>Command</h6></label>
                                    <input className="form-control" type="text" name="commandJPG" id="commandJPG" placeholder="Default" onKeyUp={handleChange} />
                                </div>

                            </div>

                            

                            <div className="form-row d-flex">   
                                <div className="form-group col-md-6 mb-3">
                                    <label><h6>PNG Engine</h6></label>
                                    <select className="form-control" name="PNG" onChange={handleChange}>
                                        <option value="pngquant">pngquant</option>
                                        {/* <option value="optipng">optipng</option> */}
                                        {/* <option value="pngout">pngout</option> */}
                                        {/* <option value="webp">webp</option> */}
                                    </select>
                                </div>

                                <div className="form-group col-md-12 mb-3 mx-3" >
                                    <label><h6>Command</h6></label>
                                    <input className="form-control" type="text" name="commandPNG" id="commandPNG" placeholder="Default" onKeyUp={handleChange} />
                                </div>

                            </div>

                            {/* <div className="form-row d-flex">
                                <div className="form-group col-6 mb-3">
                                    <label><h6>SVG Engine</h6></label>
                                    <select className="form-control" name="SVG" >
                                        <option value="svgo">svgo</option>
                                    </select>
                                </div>

                                <div className="form-group col-12 mb-3 mx-3" >
                                    <label><h6>Command</h6></label>
                                    <input className="form-control" type="text" name="commandSVG" id="commandSVG" onKeyUp={handleChange} />
                                </div>

                            </div> */}

                            <div className="form-row d-flex">
                                <div className="form-group col-md-6 mb-3">
                                    <label><h6>GIF Engine</h6></label>
                                    <select className="form-control" name="GIF" >
                                        <option value="gifsicle">gifsicle</option>
                                        {/* <option value="gif2webp">gif2webp</option> */}
                                        {/* <option value="giflossy">giflossy</option> */}
                                    </select>
                                </div>                                

                                <div className="form-group col-md-12 mb-3 mx-3" >
                                    <label><h6>Command</h6></label>
                                    <input className="form-control" type="text" name="commandGIF" id="commandGIF" placeholder="Default" onKeyUp={handleChange} />
                                </div>

                            </div>
                        
                    </div>
                        
                    

                    
                </div>
            </div>
        )  
    
}

export default SelectBox;