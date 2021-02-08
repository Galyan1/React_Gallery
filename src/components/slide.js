import { render } from 'react';
import React, { Component }  from 'react';

class Slide extends Component {
    constructor(props){
        super(props);    
    }

 

    state = {
        urlImg: ''
    }
    

  


    next = ()=>{
        const img = document.querySelector('.slider img');
        if (i<{images}.length-1){
            i++;
            img.src = {imeges}[{pic}];
        }
        else{
        i = 0;
            img.src = imeges[i];
        }
        console.log(i);
    }

    

    back = () =>{
        const img = document.querySelector('.slider img');
        if (i >= 1){
            i--;
            img.src = imeges[i];   
        }
        else{
            i = imeges.length-1;
            img.src = imeges[i];
        }

        console.log(i);
    }

    render(){
        return(     
                    <img src="" alt=""/>           
    )
}
}

export default Slider;

