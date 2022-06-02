import React, { Component } from 'react'

export default class Update extends Component {

 constructor(props){

        super(props)
        this.state={favColor:"red"}  
       console.log("constructor")
       console.log("red")
       }


       changeColor=()=>{

        this.setState({favColor:"blue"})
        console.log("blue")
        
        }

  render() {
    return (
        <>
        <div>My fav color is {this.state.favColor}</div>
        <button onClick={this.changeColor}>Change Colour</button>
        </>
    )
  }
}
