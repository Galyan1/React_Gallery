import React, { Component }  from 'react';
import Service from './services';



class Photos extends Component  {

    
    elem = new Service();

    componentDidMount(){
    this.updatePhoto();
  }

    updatePhoto(){
  this.elem.getPhotos()
      .then(this.props.onPhotosLoaded)    
}

    
   render() {
            const {photos} = this.props;
    return(
        <div className ='photos'>
            {photos.map((alb) => {return <div key = {photo.id} className = 'photo'><img>{photo.url}</img></div>})}
        </div>
    )
   }
}
export default Photos;