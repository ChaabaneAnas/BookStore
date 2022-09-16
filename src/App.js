import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Books from "./Components/Books"

const App = () => {
    return(
        <>
        <Header />
        <Routes>
            <Route path='/' element={<Books/>}/>
            <Route path='/Categories' element={<Categories/>}/>
        </Routes>
        </>
    )
}
export default App