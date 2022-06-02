//Each Component in a react has a lifecycle which you can monitor and manipulate during its phases

//1.Initaial Phase
//2.Mounting Phase
//3.Updating phase 
//4.Unmpounting Phase

//Mounting Phase
//1.Constructor 2.getDerivedStatefromprops 3.render 4.ComponentDidMount

//1.Constructor:
//The constructor Method is called before anything else,it going to be called with the props and you should start by calling the super (props) it going to be the initial phase in our react life cycle 

//2.getDerivedStatefromProps

//The is an Method which is called before rendering the elements in the D.O.M
//It takes state  and Props as an argument and returns an object with changes to the state 

//The render Methpd is required and will be always called and the others are Optional 

//ComponentDidMount:It is called after the component is rendered
//This is where you run the statements that requires that the component is already pklaced in the D.O.M


//Updating Phase

//1.getDerivedstateFromProps 2.shouldComponentUpdate 3.render 4.getSnapshotBedforeupdate 5.component Did Update ()


//1.getDerivedstateFromprops:This is the first Method that is called when a component gets Upadetd

//shouldComponentUpdate:This Method is always depend on the true or false by default its going to be true 

//getSnapshotBeforeUpdate:It will try to rememeber the last changed Value and remember that ComponentDidMount()

//ComponentDidUpdate():This is method is called after the update has been rendered in the D.O.M

//UnMounting Phase:1.The component will unmount 

//ComponentwillunMount:This Method is called when the component is about to be removed from the D.O.M

