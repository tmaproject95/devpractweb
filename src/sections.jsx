import React from 'react'
import './sections.css'


const Sections = ({
    selectedStack,
    removeFromStack,
    removeAll
}) => {

    return (

        <div className="stack-card">

            <h2>Your Stack</h2>


            <p className="subtitle">

                {selectedStack.length === 0
                    ? "No technologies selected yet."
                    : `${selectedStack.length} Technology Selected`
                }

            </p>


            {selectedStack.length === 0 ? (

                <div className="empty-box">
                    Your stack is empty.
                </div>

            ) : (

                <div className="selected-items">

                    {selectedStack.map((item) => (

                        <div
                            className="selected-item"
                            key={item.id}
                        >

                            <img
                                src={item.icon}
                                alt={item.name}
                            />

                            <div className="selected-info">

                                <strong>
                                    {item.name}
                                </strong>

                                <span>
                                    {item.category}
                                </span>

                            </div>


                            <button
                                className="remove-button"
                                onClick={() => removeFromStack(item.id)}
                            >
                                ×
                            </button>

                        </div>

                    ))}


                    <button
                        className="remove-all"
                        onClick={removeAll}
                    >
                        Remove All
                    </button>

                </div>

            )}

        </div>
    )
}

export default Sections