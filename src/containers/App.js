import React, { Component,useState } from 'react';

import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component{
  state = { persons:[
    {id:1,name:'deepa'},
    {id:2,name:'ashutosh'},
    {id:3,name:'abhay'},
    {id:4,name:'akhilesh'},
    {id:5,name:'naveen'},
    {id:6,name:'paritosh'}
  ],
  showPerson: false
}
switch= ()=>{
  console.log("juuguyyg");
  const doesPerson = this.state.showPerson
  this.setState({
   showPerson : !doesPerson
  
})

}
change= (event,id)=>{
 const personsInd  = this.state.persons.findIndex(p=>{
 return p.id===id;
});
const perso = {...this.state.persons[personsInd]};
console.log("person",perso);
  perso.name=event.target.value;
  console.log(perso);

  const person=[...this.state.persons];
  person[personsInd] = perso;
  this.setState({persons:person});
}

deletHandler = (index)=>{
  // const persons  = this.state.persons.slice();
  const persons = [...this.state.persons]
  persons.splice(index,1);
  this.setState({
    persons:persons
  })

}


  render()
    {
      let persons = null;
     
      if(this.state.showPerson){
        persons = (
          <div>
                
          <Persons
   persons={this.state.persons} 
   clicked={this.deletPersonHandler}
    changed={this.nameChangedHandler}/>
    </div>
              
             
        )
     

      } 
      return (
        <div className="App">
        <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPerson}
        persons={this.state.persons}
        clicked={this.switch}/>
           {persons}

          </div>
      
        );
    }

  

}

// const App = props =>{
// const [personsState,setPersonsState] =  useState(
//     { persons:[
//           {name:'deepa'},
//           {name:'ashutosh'}
//         ]
//       }
//   );

//   const switchHandller = () =>{
    
//     setPersonsState({
//         persons:[
//           {name:'deepa'},
//           {name:'abhi'}
//         ]
      
//     });
//     }
  

//   return (
//             <div className="App">
//               <h1>Learn Component</h1>
//               <button onClick={switchHandller}>Switch</button>
//              <Person name={personsState.persons[0].name}></Person>
//              <Person name={personsState.persons[1].name}/>
//              <Person name="akhilesh"/>
//               </div>
//             );
  
// }

export default App;
