import React, { Component } from 'react'

export default class GetDerived2 extends Component {

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
      <button onClick={this.changeColor}>Blue</button>
      </>
    )
  }
}

//1.Constructor ,render,getDerivedstatefromprops
//   red          blue  ,  yellow 