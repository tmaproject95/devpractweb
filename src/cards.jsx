import React from 'react'
import { use } from "react"
import "./cards.css"


const Cards = ({ cardspromise, addToStack }) => {

    const cards = use(cardspromise)

    return (
        <div className="cards-container">

            {cards.map((c) => (

                <div className="card" key={c.id}>

                    <div className="card-top">

                        <img
                            src={c.icon}
                            alt={c.name}
                            className="card-icon"
                        />

                        <span className="badge">
                            {c.badge}
                        </span>

                    </div>


                    <h2>{c.name}</h2>


                    <p className="description">
                        {c.description}
                    </p>


                    <div className="card-line"></div>


                    <div className="card-info">

                        <span className="category">
                            {c.category}
                        </span>

                        <span className="difficulty">
                            {c.difficulty}
                        </span>

                        <span className="rating">
                            ⭐ {c.rating}
                        </span>

                    </div>


                    <button
                        className="add-button"
                        onClick={() => addToStack(c)}
                    >
                        Add to Stack
                    </button>

                </div>

            ))}

        </div>
    )
}

export default Cards