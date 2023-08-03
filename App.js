import './App.css';
// import Ecom from './Components/Ecom';
// import Ecom1 from './Components/Ecom1';
// import Navbar from './Components/Navbar';
import Home from './components/Home1';
import {Routes,Route} from 'react-router-dom';
import WomenEthnic from './components/WomenEthnic';
import WomenWestern from './components/WomenWestern';
import Men from './components/Men';
import Kids from './components/Kids';
import HomeKitchen from './components/HomeKitchen';
import Beauty from './components/Beauty';
import Jewellery from './components/Jewellery';
import Bag from './components/Bag';
import WomenStore from './components/WomenStore';
import MenStore from './components/MenStore';
import KidsStore from './components/KidsStore';
import HomeDecor from './components/HomeDecor';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/women' element={<WomenEthnic /> } />
        <Route path='/western' element={<WomenWestern /> } />
        <Route path='/men' element={<Men /> } />
        <Route path='/kids' element={<Kids /> } />
        <Route path='/hk' element={<HomeKitchen /> } />
        <Route path='/bh' element={<Beauty /> } />
        <Route path='/ja' element={<Jewellery /> } />
        <Route path='/bf' element={<Bag /> } />
        <Route path='/ks' element={<KidsStore/> } />
        <Route path='/ws' element={<WomenStore/> } />
        <Route path='/ms' element={<MenStore/> } />
        <Route path='/hd' element={<HomeDecor/> } />
      </Routes>
    </div>
  );
}

export default App;