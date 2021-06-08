import React from 'react'


class HornedBeast extends React.Component{

    constructor(props){
        super(props)
        this.state={
            count : 0
        }
    }
    handleCounting = ()=>{
        this.setState({
            count : this.state.count +1
        })
    }


render(){
    return(
        <div>
            <h2>{this.props.title}</h2>
            <img onClick={this.handleCounting} src={this.props.image_url} alt ={this.props.title}  Title={this.props.title} />
            <p>{this.props.description}</p>
            <p> ❤️ {this.state.count}</p>

        </div>
    )
}


}
export default HornedBeast; 