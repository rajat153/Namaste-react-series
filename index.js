// const heading = React.createElement('h1',{}, "Hello world from React")
// const root = ReactDOM.createRoot(document.getElementById('root'))
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
// const child = React.createElement('h1',{}, "Im h1 tags");

const parent  = React.createElement('div',{id:"parent"},
React.createElement('div',{id:"child"}, [
React.createElement('h1',{}, "I m h1 tag"),React.createElement('h2',{}, "I m h2 tag")]))

// parent.render(child)

console.log(parent) //object


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)


