import React,{Component} from 'react';


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
        return (
            
        <div  className="person">
        <p>{this.props.id}</p>
        <p>Person Name :<b>{this.props.name} </b> {Math.random()*10}</p>
        <p>{this.props.children}</p>
        <input type="text"  onChange={this.props.changed} value={this.props.name}></input>
        </div>
        )

    }

}


export default Person;