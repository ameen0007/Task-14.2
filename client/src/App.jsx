import { Fragment } from "react"


import { Mainpage } from "./Componets/page/Mainpage"
import { Productlist } from "./Componets/Productlist/Productlist"
import { Route, Routes } from "react-router"




function App() {
  return (
     <div>
     <Routes>
     <Route path="/" element={<Mainpage/>}/>
      <Route path="/product/:id" element={<Productlist/>}/>
     </Routes>

    </div>
     
  )
}

export default App
