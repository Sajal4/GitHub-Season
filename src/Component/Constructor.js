import React, { Component } from 'react'

export default class Constructor extends Component {


constructor(props){

 super(props)
 this.state={favColor:"red"}   
 console.log("constructor")


}

  render() {
      console.log("render")
    return (
      <div>My favourite color is {this.state.favColor}</div>
    )
  }
}
