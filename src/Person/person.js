import React from 'react';


const Person = (props)=>{

return (
<div  className="person">
    <p>{props.key}</p>
<p>Person Name :<b>{props.name} </b> {Math.random()*10}</p>
<p>{props.children}</p>
<input type="text"  onChange={props.changed}></input>
</div>
)
}


export default Person;