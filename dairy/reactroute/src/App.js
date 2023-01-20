import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Simple from '../../simple';
import './App.css';

const App=()=>{

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Simple/>}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;