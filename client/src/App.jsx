import { Fragment } from "react"


import { Mainpage } from "./Componets/page/Mainpage"
import { Productlist } from "./Componets/Productlist/Productlist"



function App() {
  return (
     <Fragment>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/product/:id" element={<Productlist/>} />
      </Routes>
       
     </Fragment>
  )
}

export default App
