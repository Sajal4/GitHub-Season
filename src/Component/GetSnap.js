import React, { Component } from 'react'

export default class GetSnap extends Component {

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

getSnapshotBeforeUpdate(prevProps,prevState){

document.getElementById("div1").innerHTML="Before the update,the favourite color is " +prevState.favColor //prev value


}
componentDidUpdate(){

    document.getElementById("div2").innerHTML="After the update,the favourite color is " +this.state.favColor //After Updating 

}

  render() {
    return (
      <div>

<div id="div1"></div>
<div id="div2"></div>

      </div>
    )
  }
}
