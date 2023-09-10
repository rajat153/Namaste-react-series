import React from "react";
import ReactDOM from "react-dom/client"



//React Element are objects when we render it to dom it becomes a DOM element



//JSX
const jsxheading = <h1>JSX heading</h1>

//3 elements inside a creatElements are tag, attributes,childern
// const heading = React.createElement('h1',{}, "Hello world from React")
//  const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)


{/* <div id ="parent">
    <div id="child">
        <h1>Im h1 tag</h1>
        <h2>Im h2 tag</h2>
    </div>

</div> */}

// ReactElement(object) convert to html that browser understands

/**
 * 
 */
// const first = React.createElement('div',{id:"child"});
// const child = React.createElement('h1',{}, "I am h1 tags");

const parent  = React.createElement('div',{id:"parent"},
React.createElement('div', {id:"child"}, [
React.createElement('h1',{}, "I m h1 tag"),
React.createElement('h2',{}, "I m h2 tag")],

React.createElement("div", {id:"child2"},[
    React.createElement('h1',{},"I am Rajat"),
    React.createElement('h1',{},"Learning Namaste react course"),
])
 ))

// // parent.render(child)

// // console.log(parent) //object

// React Element
const heading = (
    <h1 className="head" tabIndex={4}>Namaste React Using JSX</h1>
)

console.log(typeof(heading)) // ans-object

const Title = () =>{
   return <h1>I am a Title</h1>
}


// React Functional Component return JSX
//Component Composition
const HeadingComponent = () => (
    <div id ="container">
        {Title()}
        <Title/>
        <Title></Title>   
        <h2>Namsate Functional Component</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(parent)
root.render(<HeadingComponent/>)


