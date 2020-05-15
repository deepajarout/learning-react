import React from 'react';

const cockpit = (props) =>{
    const style={}

    if (props.showPersons){

        style.backgroundColor = 'red';
    }
  
    return(
        <div>
       <h1>Learn Component making {props.title}</h1>
        <button style={style} onClick={props.clicked}>Switch</button>
        </div>
    )

}


export default cockpit;