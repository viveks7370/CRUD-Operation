import { useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Create from './Components/Create';
import Update from './Components/Update';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/update/:id' element={<Update />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
