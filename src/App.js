import React, {useState} from "react"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import RockEdit from "./Pages/RockEdit"
import RockIndex from "./Pages/RockIndex"
import RockNew from "./Pages/RockNew"
import RockShow from "./Pages/RockShow"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import "./App.css"
import mockRocks from "./mockRocks"
import { Routes, Route } from "react-router-dom"


const App = () => {

    const createRock = (rock) => {
        console.log(rock)
      }

    const [rocks, setRocks] = useState(mockRocks)
        return (

        <>
            <Header />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rockindex" element={<RockIndex rocks={rocks} />} />
            <Route path="/rockshow/:id" element={<RockShow rocks={rocks}/>} />
            <Route path="/rocknew" element={<RockNew createRock={createRock}/>} />
            <Route path="/rockedit" element={<RockEdit />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}


export default App;
