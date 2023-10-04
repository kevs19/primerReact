import { Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx'
import Astros from './components/Astros.jsx';
import './App.css'

function App(){

    const linksData=[
      {name : 'Home', href: '/'},
      {name : 'About', href: '/'},
      {name : 'Astros', href: '/'},
    ]
  return(
      <>
          <Navbar header='Navbar' links={linksData} /> 
          <Routes>
              <Route
                  element={<Main />}
                  path='/'
              />
              <Route 
                  element={<Astros />}
                  path='/astros'
              />
              <Route 
                  element={<About />}
                  path='/about'
              />
          </Routes>
      </>
  )
}

export default App

    


