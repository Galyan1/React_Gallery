import React, {Component} from 'react';
import './slider.css'

class Slider extends Component {
    constructor(props){
        super(props);
    }
    
    next = () => {
        if (this.props.index < this.props.images.length-1){
            this.props.nextImg();
        }   
    }

    back = () => {
        if (this.props.index >= 1){
            this.props.backImg();
        }
    }
    hideSlider = (e) => {
        if (e.target.getAttribute('class') == 'slide_flex') {
            this.props.hideSlider();
        }
    }
    
   
    render(){
        const {images, index} = this.props;

        return(
            <div className="slider_container">
            <div className="slide_flex" onClick = {this.hideSlider}>
                <div className="slider">
                    <button id = 'back' onClick = {this.back}>назад</button>
                    <img src={images[index].url} alt=""/>
                    <button id = 'next' onClick = {this.next}>вперед</button>
                </div>
            </div>   
        </div>   
    )
}
}

export default Slider;

