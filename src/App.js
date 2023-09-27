import { BrowserRouter, Route, Routes } from "react-router-dom";
import Party from "./pages/Party";
import Rs from "./pages/Rs";
import Salesbook from "./pages/Salesbook";
import Company from "./pages/Company";
import Password from "./pages/Password";
import Back from '../src/Assest/LandingImage.png';
import Home from '../src/pages/Home';


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/party" element={<Party style={{ backgroundImage: `url(${Back})` }} />} />
          <Route path="/rs" element={<Rs />} />
          <Route path="/salesbook" element={<Salesbook />} />
          <Route path="/company" element={<Company />} />
          <Route path="/password" element={<Password />} />
        </Routes>
    </>
  )
}

export default App;
