import React, { Component }  from 'react';
import Service from './services';
import './albums.css';


class Albums extends Component  {

    
    elem = new Service();

    componentDidMount(){
    this.updateAlb();
  }

    updateAlb(){
  this.elem.getAlbums()
      .then(this.props.onalbumsLoaded)    
}

    showPhotos = (e) =>{
       this.props.createPhotos(e.currentTarget.getAttribute('data-key'));
    }
    

    
    
   render() {
            const {albums} = this.props;
    return(
        <div className ='albums'>
            {albums.map((alb) => {return <div key = {alb.id} data-key = {alb.id}  className = 'album' onClick = {this.showPhotos}><div></div><span>{alb.title}</span></div>})}
        </div>
    )
   }
}
export default Albums;


