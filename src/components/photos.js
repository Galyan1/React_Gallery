import React, { Component }  from 'react';
import Service from './services';
import Slider from './slider'
import './photos.css'


class Photos extends Component  {

  state = {
    slider: false,
    index: ''
  }

    elem = new Service();

    componentDidMount(){
    this.updatePhoto();
  }

    updatePhoto(){
  this.elem.getPhotos()
      .then(this.props.onPhotosLoaded);
}


    showSlider = async(e) => {
        const i = e.currentTarget.getAttribute('data-number');
        console.log(e.currentTarget.getAttribute('data-number'));
       await this.setState({
          slider: true,
          index: i
        })
        console.log(this.state)
    }

    nextImg = async() =>{
      await this.setState(({index})=>{
        const newI = ++index;
        console.log(newI);
      return{
        index: newI
      }
      })
      console.log(this.state.index)
    }

    backImg = async() =>{
      await this.setState(({index})=>{
        const newI = --index;
        console.log(newI);
      return{
        index: newI
      }
      })
      console.log(this.state.index)
    }

    hideSlider = () =>{
      this.setState({
        slider: false,
      })
    }
     

  



    
   render() {
            const {photos} = this.props;
            const slider = this.state.slider ? <Slider images = {photos} index = {this.state.index} nextImg = {this.nextImg} backImg = {this.backImg} hideSlider ={this.hideSlider}/> : null;
           
    return(
      <>
        <div className ='gallery'>
            {photos.map((photo, i) => {return <div key = {photo.id} data-number = {i} className = 'photo' onClick = {this.showSlider}><img src = {photo.thumbnailUrl}/> <span>{photo.albumId}</span></div>})}
        </div>
        {slider}
       </> 
    )
   }
}
export default Photos;

