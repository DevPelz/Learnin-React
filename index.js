function mainContent (){
    return (
        <h1>I'm learning reac!</h1>
    )
}

ReactDom.render(
    <div>
        <Navbar />
        <mainContent />
    </div>,
    document.getElementById("root")
)

// Recreating a code using vanilla javascript
const h1 = document.createElement("h1");
h1.textContent = 'This is an imperative way to program'
h1.className = "header"
document.getElementById("rot").append(h1)