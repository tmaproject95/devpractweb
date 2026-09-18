import { Suspense, useState } from 'react'
import Navbar from "./navbar.jsx";
import Banner from "./banner.jsx";
import Cards from './cards.jsx';

import './App.css'

const dpromisefetch = async ()=>{
  const res=await fetch("/data.json")
  const data= await res.json();
  return data

}
function App() {
  const cardspromise=dpromisefetch();
  return(
   <div>
      <Navbar />
      <Banner></Banner>
      <div>
        <Suspense fallback={<h2> Loading...</h2>}> <Cards cardspromise={cardspromise}/> </Suspense>
      </div>


    </div>
    
  
  
  )
  
  
}

export default App
