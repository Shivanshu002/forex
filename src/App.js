import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Party from "./pages/Party";
import Rs from "./pages/Rs";
import Salesbook from "./pages/Salesbook";
import Company from "./pages/Company";
import Password from "./pages/Password";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/party" element={<Party />} />
        <Route path="/rs" element={<Rs/>} />
        <Route path="/salesbook" element={<Salesbook />} />
        <Route path="/company" element={<Company />} />
        <Route path="/password" element={<Password />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
