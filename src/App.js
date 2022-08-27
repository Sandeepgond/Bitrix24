
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './Components/AllRoutes';
import { Navbar } from './Components/Navbar';
function App() {

  return (
    <div className='App'>
      <BrowserRouter>  
       <AllRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
