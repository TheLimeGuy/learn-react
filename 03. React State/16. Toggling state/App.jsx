import React from 'react'
export default function App() {
    const [isGoingOut, setIsGoingOut] = React.useState(true)
    function handleClick(){
        setIsGoingOut((prev)=>!prev)
    }

    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value" onClick={handleClick}>{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}
