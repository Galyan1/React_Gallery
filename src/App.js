import { Component } from 'react';
import Albums from './components/albums';
import './App.css';


class App extends Component {

  // elem = new Service();

  state = {
    albums: [],
    photos: [],
    img: false,
    slider: false
  };

  // componentDidMount(){
  //   this.updateAlb();
  // }

  onalbumsLoaded = (data) =>{
    let albums =  data.filter((item) =>{return item.id <= 10; });
    this.setState({
        albums: albums
     }) 
}
// updateAlb(){
 
//   this.elem.getAlbums()
//       .then(this.onalbumsLoaded)    
// }

  onPhotosLoaded = (data) =>{
  let photos =  data.filter((item) =>{return item.albumId <= 10; });
  this.setState({
      photos: photos
   })
 
}

 

  render(){
    const {albums, photos, img, slider} = this.state;
    const componentAlbums = !img && !slider ? <Albums albums = {albums} onalbumsLoaded ={this.onalbumsLoaded}/> : null;
    return (
          <>
          {componentAlbums}

          </>
    )
  } 
}

export default App;
