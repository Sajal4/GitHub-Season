import React, { Component } from 'react'

export default class GetDerive extends Component {
    constructor(props){

        super(props)
        this.state={favColor:"red"}   
        console.log("constructor")
       
       
       }
       static getDerivedStateFromProps(props,state){


      return {favColor:props.favColour}


       }
       
  render() {
    return (
      <div>My fav color is {this.state.favColor}</div>
    )
  }
}

//1.Constructor ,staticderived from props,render 