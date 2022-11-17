import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Pricing from './components/Pricing';
import NotFound from './components/NotFound';
import Starship from './components/Starship';
import { Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import StarshipList from './components/StarshipList';

function App() {
  return (
    <div className="App">
      <h1>Hello Router</h1>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/pricing' element={<Pricing />}/>
        <Route path='/pricing/*' element={<h2>Premium Pricing </h2>}/>
        <Route path='/contacts' element={<Contacts />}/>

        <Route path='/starships' element={<StarshipList />} />
        <Route path='/starships/:starshipId/*' element={<Starship />} />
        <Route path='/millenium-falcon' element={<Navigate to='/starships/10' replace />} />

        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
