import React from 'react';
import ReactDOM from 'react-dom/client';


// 1. functional component

// function Car() {
//   return <h2>Hi, I will have a Car!</h2>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>)

// 2. props in functional component

// function Car(props){
//     return <h2>I have a {props.color} Car!</h2>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car color="pitch black"/>);

// 3. Components in Components

// function Car(){
//     return <h2>I have a Car</h2>;
// }

// function Garage(){
//     return(
//         <>
//             <h1>What do I have in my Garage?</h1>
//             <Car/>
//         </>
//     );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);

// Components in Files

import Car from './Car';
function Garage(){
    return(
        <>
            <h1>What do I have in my Garage?</h1>
            <Car/>
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage/>);