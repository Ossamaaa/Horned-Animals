import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';



class HornedBeasts extends React.Component{

    constructor(props){
      super(props)
      this.state={
        Count :0,

      }
    }
   
    UserClick=()=>{
      this.setState({
        Count : this.state.Count +1 ,
      })
    }
    handleClick=()=>{
     this.props.OurSelected(this.props.title)
     
    }


  render(){
    return(
    <Card className='cards'  onClick={this.handleClick}>
    <Card.Img variant="top" onClick ={this.UserClick} src={this.props.image_url} title={this.props.title}  />
    <Card.Body>
      <Card.Title>{this.props.title}</Card.Title>
      <Card.Text>
      {this.props.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">number :  ❤️{this.state.Count}</small>
    </Card.Footer>
  </Card>
   ) 

  }
}


export default HornedBeasts;