import React from "react"
import avatar from "./images/user.png"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */

    function toggleFavorite() {
        console.log("Toggle Favorite")
    }

    const image = {
        source: "",
        label: "",
        alternative: "",
        pressed: false
    }
        if (contact.isFavorite){
            image.source = starFilled
            image.label = "Remove from favorites"
            image.pressed = contact.isFavorite
            image.alternative = "filled star icon"
        }else{
            image.source = starEmpty
            image.label = "Add to favorites"
            image.pressed = contact.isFavorite
            image.alternative = "empty star icon"
        }
    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={false}
                        className="favorite-button"
                    >
                        <img
                            src={image.source}
                            className="favorite"
                            alt={image.alternative}
                            aria-label={image.label}
                            aria-pressed={image.pressed}
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
