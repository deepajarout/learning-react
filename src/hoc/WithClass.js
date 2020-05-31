import React from 'react';


//-----------------using hoc withclass--------------------
// const WithClass = props => (

//     <div className={props.classes}>
//         {props.children}
//     </div>
// )

//------------another way using hoc wrapper------------------------

const WithClass = (WrappedComponent,className)=>{
   
    return props => (

            <div className={className}>
               <WrappedComponent {...props}/>
            </div>
        )

}


export default WithClass;