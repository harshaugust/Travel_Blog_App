import Log from "./Components/Log";
import Navigation from "./Components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NewLog } from "./Components/NewLog";


function App() {

  return (
    <div>
       <Navigation />
       <Log/>
       <NewLog/>
    </div>
  );
}

export default App;
