import { Component } from 'react';
import Albums from './components/albums';
import Photos from './components/photos';
//mport Spinner from './spinner';
import './App.css';


class App extends Component {

  state = {
    albums: [],
    photos: [],
    albId: '',
    img: false,
    alb: true
  };


  onalbumsLoaded = (data) =>{
    let albums =  data.filter((item) =>{return item.id <= 10; });
    this.setState({
        albums: albums
     }) 
}

   createPhotos = (element) => {
    this.setState({
      albId: element,
      alb: false,
      img: true
      
   })
    };

    onPhotosLoaded =  (data) =>{
      let photos =  data.filter((item) =>{return item.albumId == this.state.albId; });
      this.setState({
        photos: photos
     })
      }

      back = () =>{
        this.setState({
          img: false,
          alb: true
       })
      }

      render(){
        const {albums, photos, img, slider} = this.state;
        const componentAlbums = !img && !slider ? <Albums albums = {albums} onalbumsLoaded ={this.onalbumsLoaded} createPhotos ={this.createPhotos} /> : null;
        const componentPhotos = img ? <Photos photos = {photos} onPhotosLoaded ={this.onPhotosLoaded}/> : null;
        return (
          <div className = 'wrapper'>
            <button onClick ={this.back}>назад</button>
              {componentAlbums}
              {componentPhotos}
          </div>
        )
      } 

   }


export default App;
