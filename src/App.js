import React, { Component,useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/person';

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
      const style={}
      if(this.state.showPerson){
        persons = (
       
          <div>{
            this.state.persons.map((Persn,index)=>{
            return  <Person  name={Persn.name} key={Persn.id} click={()=>{this.deletHandler(index)}} changed={(event)=>{this.change(event,Persn.id)} }></Person>
            })
            }
               {/* <Person name={this.state.persons[0].name}  changed={this.change}></Person>
               <Person name={this.state.persons[1].name}  changed={this.change}/>
               <Person name="akhilesh"  changed={this.change}/> */}
                </div>
              
             
        )
        style.backgroundColor = 'red';

      } 
      return (
        <div className="App">
          <h1>Learn Component</h1>
          <button style={style} onClick={this.switch}>Switch</button>
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
