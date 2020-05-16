import React,{PureComponent} from 'react';
import Person from './Person/person';


// const  persons = (props) => {
//     console.log('[persons.js] render....'); 
//     return   props.persons.map((Persn,index)=>{
   
//         return (
//         <Person  
//         name={Persn.name} 
//         key={Persn.id}
//          click={()=>props.clicked(index)} 
//          changed={(event)=>props.changed(event,Persn.id) }>
//          </Person>
//         );
//         }) ;
    
// }
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props,state){

    //     console.log('[Persons.js] getDerivedStateFromProp', props);
      
    //     return state;
        
      
    //   }
  //  shouldComponentUpdate(nextProps, nextState) {

  //   if(nextProps.persons!= this.props.persons||nextProps.changed !=this.props.changed ||nextProps.clicked != this,this.props.clicked){
  //     console.log('[Persons.js] shouldComponentUpdate(nextProps, nextState)' );
  
  //     return true;
  //   }else{
  //     return false;
  //   }
        
      
  //     }

      getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforUpdate' );
        return {message:'snapshot'};
      }

      componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[Persons.js]  componentDidUpdate');

        console.log( snapshot);
      
        
      
      } 
      componentWillUnmount(){
        console.log('[Persons.js]   componentWillUnmount');
      }

    render(){
        console.log('[persons.js] render....'); 
        return   this.props.persons.map((Persn,index)=>{
       
            return (
            <Person  
            name={Persn.name} 
            key={Persn.id}
             click={()=>this.props.clicked(index)} 
             changed={(event)=>this.props.changed(event,Persn.id) }>
             </Person>
            );
            }) ;
    }
   
    
}






export default Persons;
      

       

