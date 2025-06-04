import React from "react"

export default function App() {
    const [stateCount,setStateCount] = React.useState(0) 
    function handleClickPlus(){
        console.log("ADD")
    }
    function handleClickMinus(){
        console.log("MINUS")
    }
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button 
                    className="minus" 
                    aria-label="Decrease count"
                    onClick={handleClickMinus}
                >
                        –
                </button>
                <h2 className="count">{stateCount}</h2>
                <button 
                    className="plus" 
                    aria-label="Increase count"
                    onClick={handleClickPlus}
                >
                    +
                </button>
            </div>
        </main>
    )
}
