import React from 'react'

class SelectBox extends React.Component{

    // constructor(){
    //     super();
    //     this.state = {
    //         city:null,
    //     }

    //     this.handleInputChange = this.handleInputChange.bind(this);
    // }

    // handleInputChange(event) {
        
    //     this.setState({
    //         city: event.target.value
    //     });
        
    // }

    // submit(){
    //     console.warn(this.state)
    // }

    render(){
        return(
            <div>
                <div className="row">   
                    <div className="col-md-6 offset-md-1">
                                                
                           <div className="form-row">
                                <div className="form-group  mb-3">
                                    <label><h6>JPG Engine</h6></label>
                                    <select className="form-control" name="JPG" onChange={this.handleInputChange}>
                                        <option defaultValue>mozjpeg</option>
                                        <option value="jpegtran">jpegtran</option>
                                        <option value="webp">webp</option>
                                        <option value="guetzli">guetzli</option>
                                        <option value="jpegRecompress">jpegRecompress</option>
                                        <option value="jpegoptim">jpegoptim</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group mb-3">
                                    <label><h6>PNG Engine</h6></label>
                                    <select className="form-control" name="PNG" onChange={this.handleInputChange}>
                                        <option defaultValue>pngquant</option>
                                        <option value="optipng">optipng</option>
                                        <option value="pngout">pngout</option>
                                        <option value="webp">webp</option>
                                        <option value="pngcrush">pngcrush</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group mb-3">
                                    <label><h6>SVG Engine</h6></label>
                                    <select className="form-control" name="SVG" onChange={this.handleInputChange}>
                                        <option defaultValue>svgo</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group mb-3">
                                    <label><h6>GIF Engine</h6></label>
                                    <select className="form-control" name="GIF" onChange={this.handleInputChange}>
                                        <option defaultValue>gifsicle</option>
                                        <option value="giflossy">giflossy</option>
                                        <option value="gif2webp">gif2webp</option>
                                    </select>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        )  
    }
}

export default SelectBox;