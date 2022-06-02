import React, { Component } from 'react'

export default class DidMount extends Component {

    constructor(props){

        super(props)
        this.state={favColor:"red"}   
        console.log("constructor")
       }
   componentDidMount ()  {
   setTimeout(() => {
    this.setState({favColor:"yellow"})
    console.log("ComponentDidUpdate")
}, 1000);


   }

  render() {
      console.log("render")
    return (
      <div>My favourite color is {this.state.favColor}</div>
    )
  }
}
