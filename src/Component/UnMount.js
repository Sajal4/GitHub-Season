import React, { Component } from 'react'

export default class UnMount extends Component {

constructor(props){
super(props)
this.state={show:true}
}

delHeader=()=>{

    this.setState=({show:false})
    console.log("deleted")
    

}
  render() {
      let myHeader;
      if(this.state.show){

        myHeader=<Child />
      };
    return (
      <div>
      {myHeader}
      <button onClick={this.delHeader}>Delete Header</button>
      
      
      </div>
    )
  }
}


class Child extends Component {


componentWillUnmount ()
{

    alert("The Component named Header is about to be UnMounted");
    console.log("deleted")
}

  render() {
    return (
      <div>Hello World </div>
    );
  }
}
