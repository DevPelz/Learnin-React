// function mainContent (){
//     return (
//         <h1>I'm learning reac!</h1>
//     )
// }

// ReactDom.render(
//     <div>
//         <Navbar />
//         <mainContent />
//     </div>,
//     document.getElementById("root")
// )

// // Recreating a code using vanilla javascript
// const h1 = document.createElement("h1");
// h1.textContent = 'This is an imperative way to program'
// h1.className = "header"
// console.log(h1)

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)

const page = (
    <div>
        <h1>Fun facts about React </h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)
// JSX
ReactDOM.render(page, document.getElementById("root"));