import React, { Component,useState } from 'react';

import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import  Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

class App extends Component{
  constructor(props){
    super(props);
    console.log('[app.js] constructor');
    

  }
  state = { persons:[
    {id:1,name:'deepa'},
    {id:2,name:'ashutosh'},
    {id:3,name:'abhay'},
    {id:4,name:'akhilesh'},
    {id:5,name:'naveen'},
    {id:6,name:'paritosh'}
  ],
  showPerson: false,
  showCockpit: true,
  changeCounter:0,
  authenticated:false
}


static getDerivedStateFromProps(props,state){

  console.log('[app.js] getDerivedStateFromProp', props);

  return state;
  

}
// componentWillMount(){

//   console.log('[app.js] componetWillMount() constructor');

  

// }

componentDidMount(){

  console.log('[app.js] componetDidMount() constructor');

  

} 

shouldComponentUpdate(nextProps, nextState) {

  console.log('[app.js] shouldComponentUpdate(nextProps, nextState)' );

  return true;
  

}

getSnapshotBeforeUpdate(prevProps,prevState){
  console.log('[app.js] getSnapshotBeforUpdate' );
  return {message:'snapshoddt'};
}

componentDidUpdate(prevProps,prevState,snapshot){
  console.log('[app.js]  componentDidUpdate');

  console.log( snapshot);

  

} 
switch= ()=>{

  const doesPerson = this.state.showPerson
  this.setState({
   showPerson : !doesPerson
  
})

}
nameChangedHandler= (event,id)=>{
 const personsInd  = this.state.persons.findIndex(p=>{
 return p.id===id;
});
const perso = {...this.state.persons[personsInd]};
console.log("person",perso);
  perso.name=event.target.value;
  console.log(perso);

  const person=[...this.state.persons];
  person[personsInd] = perso;

  this.setState((prevState,props)=>{
  return  {
    persons:person,
    changeCounter: prevState.changeCounter+1
  }
  });
}

deletHandler = (index)=>{
  // const persons  = this.state.persons.slice();
  const persons = [...this.state.persons]
  persons.splice(index,1);
  this.setState({
    persons:persons
  })

}

loginHandler = () => {
 
  this.setState ({
        authenticated : true
  })
}

  render()
    {
      console.log('[app.js] render ');
      let persons = null;
     
      if(this.state.showPerson){
        persons = (
          <div>
                
          <Persons
   persons={this.state.persons} 
   clicked={this.deletPersonHandler}
    changed={this.nameChangedHandler}
    isAuthenticated = {this.state.authenticated}/>
    </div>
              
             
        )
     

      } 
      return (
        //-----------------Using WithClass----------------
      //   <WithClass classes="App">
      //     <button onClick={()=>{this.setState({showCockpit:false})}}>Remove</button>
      //     { this.state.showCockpit ?
      //   <Cockpit
      //   title={this.props.appTitle}
      //   showPersons={this.state.showPerson}
      //   personsLength={this.state.persons.length}
      //   clicked={this.switch}/>  : null
      // }
      //     {persons}
         
         

      //     </WithClass>

      //----------------------using wrapper--------------------
        <Aux >
          <button onClick={()=>{this.setState({showCockpit:false})}}>Remove</button>
          <AuthContext.Provider value={{authenticated:this.state.authenticated,login:this.loginHandler}}>
          { this.state.showCockpit ?
        <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPerson}
        personsLength={this.state.persons.length}
        clicked={this.switch}
        // login={this.loginHandler}
        />  : null
      }
          {persons}
         
          </AuthContext.Provider>

          </Aux>
      
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

export default WithClass(App,"App");
