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

const navbar = (
    <nav>
        <h1>Pelz'S Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
// JSX
ReactDOM.render(navbar, document.getElementById("root"))