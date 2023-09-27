import { Fragment } from "react"
import { Mainpage } from "./Componets/landingpage/mainpage"
import { Productpage } from "./Componets/productpage/Productpage"
import { Route, Routes } from "react-router-dom";


function App() {
  return (
     <Fragment>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/product/:id" element={<Productpage/>} />
      </Routes>
       
     </Fragment>
  )
}

export default App
