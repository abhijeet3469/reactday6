import React from 'react'; // Here it means, Function React is exported by default.
import ReactDOM from 'react-dom/client';
import './index.css'; // External CSS
import Home from './pages/Home';
import Login from './pages/Login';
import Appbar from './components/Appbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
// Rules🔥: const✅, let✅, var❌ || for loops❌: for each, for in, for of, for range
// map✅, filter✅, reduce✅



root.render(<>
<BrowserRouter>
<Appbar/>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
</Routes>
</BrowserRouter>

</>)