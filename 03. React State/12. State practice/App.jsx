import React from "react"

export default function App() {
    let [stateCount,setStateCount] = React.useState(0) 
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{stateCount}</h2>
                <button className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
