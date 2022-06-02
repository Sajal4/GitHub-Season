import React, { Component } from 'react'

export default class DidUpdate extends Component {

    constructor(props){

        super(props)
        this.state={favColor:"red"}  
       console.log("constructor")
       console.log("red")
       }


       componentDidMount()
       {
       
       setTimeout(() => {
       
           this.setState({favColor:"yellow"})
           console.log("ComponentDidUpdate")  
       },5000 );
       
       }

       componentDidUpdate(){

        document.getElementById("div").innerHTML="After the update,the favourite color is " +this.state.favColor //After Updating 
    
    }
    

  render() {
    return (
        <div id="div"></div>
    )
  }
}
