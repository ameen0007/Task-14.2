import { Fragment } from "react"


import { Mainpage } from "./Componets/page/Mainpage"
import { Productpage } from "./Componets/productpage/Productpage"
import { Route, Routes } from "react-router"




function App() {
  return (
     <div>
     <Routes>
     <Route path="/" element={<Mainpage/>}/>
      <Route path="/product/:id" element={<Productpage/>}/>
     </Routes>

    </div>
     
  )
}

export default App
