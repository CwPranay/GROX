import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/WorkPage"; 
import Request from "./pages/Request";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/request" element={<Request/>}/>
      </Routes>
    </Router>
  );
}

export default App;