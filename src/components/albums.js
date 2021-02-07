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

    
   render() {
            const {albums} = this.props;
    return(
        <div className ='albums'>
            {albums.map((alb) => {return <div key = {alb.id} className = 'album' ><div></div><span>{alb.title}</span></div>})}
        </div>
    )
   }
}
export default Albums;


