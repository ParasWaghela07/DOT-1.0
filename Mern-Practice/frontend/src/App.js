import "./App.css";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import CreatePage from "./pages/CreatePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/createUser" element={<CreatePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
