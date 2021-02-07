export default  class Service {
    constructor(){
        this.api_base = 'https://jsonplaceholder.typicode.com/';
    }

    async getResource (url){
        const res = await fetch(`${this.api_base}${url}`);
        return await res.json();
    };

    getAlbums() { return  this.getResource(`albums`)};

    getPhotos() {return  this.getResource(`photos`)};


}



