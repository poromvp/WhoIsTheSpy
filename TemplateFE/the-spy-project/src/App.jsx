import { HomePage } from './home/HomPage';
import { PlayerPage } from './player/PlayerPage';
import { Route, Routes } from 'react-router';
import './App.css'

function App() {
  return (
    <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='player' element={<PlayerPage/>}/>
    </Routes>
  );
}

export default App
