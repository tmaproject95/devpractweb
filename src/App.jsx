import { Suspense, useState } from 'react'
import Navbar from "./navbar.jsx"
import Banner from "./banner.jsx"
import Cards from './cards.jsx'
import Sections from './sections.jsx'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import "./app.css"


const dpromisefetch = async () => {
    const res = await fetch("/data.json")
    const data = await res.json()
    return data
}



const cardspromise = dpromisefetch()


function App() {

    const [selectedStack, setSelectedStack] = useState([])



    const addToStack = (card) => {

        const alreadyExists = selectedStack.some(
            (item) => item.id === card.id
        )

        if (alreadyExists) {
            toast.warning(`${card.name} is already in your stack!`)
            return
        }

        setSelectedStack([...selectedStack, card])

        toast.success(`${card.name} added to your stack!`)
    }



    const removeFromStack = (id) => {

        const item = selectedStack.find(
            (card) => card.id === id
        )

        setSelectedStack(
            selectedStack.filter((card) => card.id !== id)
        )

        toast.info(`${item.name} removed from your stack.`)
    }


 
    const removeAll = () => {

        setSelectedStack([])

        toast.info("All technologies removed from your stack.")
    }


    return (
        <div>

            <Navbar />

            <Banner />

            <div className="cardnsec">

                <Suspense fallback={<h2>Loading...</h2>}>

                    <Cards
                        cardspromise={cardspromise}
                        addToStack={addToStack}
                    />

                </Suspense>


                <Sections
                    selectedStack={selectedStack}
                    removeFromStack={removeFromStack}
                    removeAll={removeAll}
                />

            </div>


           
            <ToastContainer
                position="top-right"
                autoClose={2000}
            />

        </div>
    )
}

export default App