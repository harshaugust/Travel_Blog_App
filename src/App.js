import Log from "./Components/Log";
import Navigation from "./Components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NewLog } from "./Components/NewLog";
import { Routes, Route, } from "react-router-dom"


function App() {

  return (
    <div>
      <Navigation/>
       <Routes>
        <Route path="/" element={ <Log/> } />
        <Route path = "/new-log" element = {<NewLog />} />
        {/* 
        This is just a check.
        */}
      </Routes>
    </div>
  );
}

export default App;
