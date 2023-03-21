import { BrowserRouter, Routes, Route } from "react-router-dom"
import '../styles/App.css';
import Main from "../pages/Main"
import Restaurantes from "../pages/Restaurantes"
import Zo from "../pages/restaurantsPages/Zo"
import Aboutus from "../pages/Aboutus";
import NotFound from "../pages/NotFound"

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/restaurants" element={<Restaurantes/>}/>
        <Route exact path="/restaurants/zo" element={<Zo/>}/>
        <Route exact path="/aboutus" element={<Aboutus/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
