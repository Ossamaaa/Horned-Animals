import React from 'react';
import HornedBeasts from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form'

class Main extends React.Component{
constructor(props){
  super(props)
  this.state={
    filteredObj : this.props.hornedData
  }
}



  fliterAnimals =(event)=>{
    let num = event.target.value;
    let neWArr= this.props.hornedData;
    let result=0;
    if(num){
      result=neWArr.filter((obj)=>{
        if(obj.horns == num)
        return obj;
      })
    }else {
      
      result = this.props.hornedData;
    }

this.shownObj(result) 
 }



  shownObj=(aaa)=>{

    this.setState({
      filteredObj : aaa
    })
  }

  render(){
    return(
<>
<Form>
  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label>Custom select</Form.Label>
    <Form.Control as="select" custom onChange={this.fliterAnimals} >
      <option value='' >All</option>
      <option  value='1'>1</option>
      <option value='2' >2</option>
      <option value='3'>3</option>
      <option value='100'>WOW</option>
    </Form.Control>
  </Form.Group>
</Form>

      <CardColumns>
        {this.state.filteredObj.map((item,index)=>{
            return(
        <HornedBeasts
        title={item.title}
        image_url={item.image_url}
        description={item.description}
        key={index}

        OurSelected ={this.props.OurSelected}
        />

        )
        
    })}
    </CardColumns>
</>
    )
  }
}


export default Main;