import React from 'react';
import Person from './Person/person';


const  persons = (props)=>props.persons.map((Persn,index)=>{
        return  <Person  
        name={Persn.name} 
        key={Persn.id}
         click={()=>props.clicked(index)} 
         changed={(event)=>props.changed(event,Persn.id) }>
         </Person>
        }) ;




export default persons;
      

       

