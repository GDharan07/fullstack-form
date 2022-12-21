

import './App.css';
import Detail from './Update';
import Form from './Form';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Form></Form>}></Route>
      <Route path='/update' element={ <Detail></Detail>}></Route>
    </Routes>
        
       
     
    
    
     
    </div>
  );
}

export default App;
