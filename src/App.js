import React from "react"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import RockEdit from "./Pages/RockEdit"
import RockIndex from "./Pages/RockIndex"
import RockNew from "./Pages/RockNew"
import RockShow from "./Pages/RockShow"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import "./App.css"
import rocks from "./mockRocks"
import { Routes, Route } from "react-router-dom"


const App = () => {
    return (

        <>
            <Header />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rockindex" element={<RockIndex />} />
            <Route path="/rockshow" element={<RockShow />} />
            <Route path="/rocknew" element={<RockNew />} />
            <Route path="/rockedit" element={<RockEdit />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}


export default App;
