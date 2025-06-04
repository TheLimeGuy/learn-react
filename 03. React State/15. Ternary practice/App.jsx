import React from 'react'
export default function App() {
    const [isGoingOut, setIsGoingOut] = React.useState("Yes")
    function handleClick(){
        (isGoingOut==="Yes") ? setIsGoingOut("No") : setIsGoingOut("Yes")
    }   
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button 
            className="value"
            onClick={handleClick}
            >
                {isGoingOut}
            </button>
        </main>
    )
}
