import React from "react"

export default function App() {
    
    const whatever = React.useState("Yes")
    const result = React.useState("Hello")
    console.log(result)
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">{whatever[0]}</button>
        </main>
    )
}
