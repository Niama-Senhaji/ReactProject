import './App.css';
import { Home } from './screens/Home';
import  Formulaire  from './screens/Formulaire';
import { Contact } from './screens/Contact';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className='container mt-10 '>
      <header className='flex justify-between items-cemter mb-5'>
        <img className='w-23 h-20 ' src='images/ma photo.jpeg' alt='Niama SENHAJI' />
      <nav className='flex justify-end'>
        <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/'> Accueil</NavLink> <br></br>
        <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/formulaire' >Formulaire</NavLink> <br></br>
        <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/contact' >Contact</NavLink>
      </nav>
      </header>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/formulaire' element={<Formulaire/>}/>
         <Route path='/contact' element={<Contact/>}/>
       </Routes>
       <footer>

       </footer>
    </div>
  );
}

export default App ;
