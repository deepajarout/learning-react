import React, { useEffect } from 'react';

const Cockpit = (props) =>{
    
    useEffect(()=>{
        console.log("[cockpit.js] useEffect");

   const timer = setTimeout(()=>{
         alert("saved data ");
        },1000);
        return ()=>{
             clearTimeout(timer);
            console.log("[cockpit.js]  1st useEffect clean work")
                    };
    },[]);

    useEffect(()=>{
        console.log("[cockpit.js]  2nd useEffect");

        return ()=>{
        console.log("[cockpit.js]  2nd useEffect clean work")
        };

    });



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


export default React.memo(Cockpit);