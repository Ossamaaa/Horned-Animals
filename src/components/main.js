
import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json'

class Main extends  React.Component{

    render (){
        return(
            
           data.map((animal)=>{
               return <HornedBeast
               image_url={animal.image_url}
               title={animal.title}
               description={animal.description}
               />
           })
            
        )
    }
} 

export default Main; 