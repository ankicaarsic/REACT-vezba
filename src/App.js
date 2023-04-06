
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Contact } from './pages/Contact'
import { Navbar } from './pages/Navbar'
import { useState, createContext } from 'react'
import {ChangeProfile} from './components/ChangeProfile'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Form } from './pages/Form'


export const AppContext = createContext() 


export default function App() {
  const client = new QueryClient()

  const [username, setUsername] = useState('Ankica')

  return (
    <div className='App'>
      <QueryClientProvider client ={client}>
      <AppContext.Provider value={{username, setUsername}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/form' element={<Form />} />
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={<h1>This is wrong page</h1>} />
        </Routes>
      </Router>
      </AppContext.Provider>
      </QueryClientProvider>
    </div>
  )
}
