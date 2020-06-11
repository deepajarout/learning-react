import React, { useEffect ,useRef} from 'react';
import AuthContext from '../../context/auth-context'

const Cockpit = (props) =>{
    const togglebtnRef =  useRef(null);
    
    useEffect(()=>{
        console.log("[cockpit.js] useEffect");

//    const timer = setTimeout(()=>{
//          alert("saved data ");
//         },1000);
       togglebtnRef.current.click();
        return ()=>{
            //  clearTimeout(timer);
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
        <button style={style} 
        ref={togglebtnRef}
        onClick={props.clicked}>
            Switch
            </button>
            <AuthContext.Consumer>
                {(context)=>
                    <button onClick= {context.login}>Log in</button>
                }
            
            </AuthContext.Consumer>
        </div>
    )

}


export default React.memo(Cockpit);