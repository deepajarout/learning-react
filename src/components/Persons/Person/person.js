import React,{Component,Fragment} from 'react';
import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/WithClass'; 
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';


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
  
    constructor(props ) {
        super(props)
        this.inputElementRef = React.createRef();
    }
    compountDidMount(){
        
        this.inputElementRef.current.focus();
    //    this.inputElement.focus();
    }

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
               <AuthContext.Consumer>
             {(context)=> context.authenticated ? <p>Authenticated</p>:<p>Please login </p>}
             </AuthContext.Consumer>
        <p>{this.props.id}</p>
        <p>Person Name :<b>{this.props.name} </b> {Math.random()*10}</p>
        <p>{this.props.children}</p>
        <input type="text"

        // ref={( inputEl )=>{ this.inputElement = inputEl}}   // old version

          ref= {this.inputElementRef}
          onChange={this.props.changed} 
          value={this.props.name}></input>
        
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

Person.propTypes = {
    id:PropTypes.number,
    name: PropTypes.string,
    changed : PropTypes.func
};


export default WithClass(Person,"person");