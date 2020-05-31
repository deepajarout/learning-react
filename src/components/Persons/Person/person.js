import React,{Component,Fragment} from 'react';
import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/WithClass';


// const Person = (props)=>{
//     console.log('[person.js] render....');
// return (
// <div  className="person">
// <p>{props.id}</p>
// <p>Person Name :<b>{props.name} </b> {Math.random()*10}</p>
// <p>{props.children}</p>
// <input type="text"  onChange={props.changed} value={props.name}></input>
// </div>
// )
// }

class Person extends Component{
    render(){
        console.log('[person.js] render....');

    //      return ( 
    //    <React.Fragment>
    //     <p>{this.props.id}</p>
    //     <p>Person Name :<b>{this.props.name} </b> {Math.random()*10}</p>
    //     <p>{this.props.children}</p>
    //     <input type="text"  onChange={this.props.changed} value={this.props.name}></input>
    //     </React.Fragment>
    //     )

        // return ( 
        //     <Fragment>
        //      <p>{this.props.id}</p>
        //      <p>Person Name :<b>{this.props.name} </b> {Math.random()*10}</p>
        //      <p>{this.props.children}</p>
        //      <input type="text"  onChange={this.props.changed} value={this.props.name}></input>
        //      </Fragment>
        //      )

        return (
           <Aux>
        <p>{this.props.id}</p>
        <p>Person Name :<b>{this.props.name} </b> {Math.random()*10}</p>
        <p>{this.props.children}</p>
        <input type="text"  onChange={this.props.changed} value={this.props.name}></input>
        </Aux> 
        )

        // return [
            
         
        //     <p key="i1">{this.props.id}</p>,
        //     <p key="i2">Person Name :<b>{this.props.name} </b> {Math.random()*10}</p>,
        //     <p key="i3">{this.props.children}</p>,
        //     <input key="i4" type="text"  onChange={this.props.changed} value={this.props.name}></input>
         
        // ];



        // return ( 
        // <div  className="person">
        // <p>{this.props.id}</p>
        // <p>Person Name :<b>{this.props.name} </b> {Math.random()*10}</p>
        // <p>{this.props.children}</p>
        // <input type="text"  onChange={this.props.changed} value={this.props.name}></input>
        // </div>
        // )

    }

}


export default WithClass(Person,"person");