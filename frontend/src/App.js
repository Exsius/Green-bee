import './global.css'
import UserProvider from "./Context/UserContext.js"
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute.js'

import Layout from './Pages/Layout.js'
import Dashboard from './Pages/Dashboard.js'
import Login from './Pages/Login.js'
import NoPage from './Pages/NoPage.js'
import Interests from './Pages/Interests.js'


function App() {  
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Layout /> }>
              <Route element={ <PrivateRoute/> }>
                <Route path='' element={ <Navigate to='/dashboard' /> } />
                <Route path='dashboard' element={ <Dashboard /> } />
                <Route path='interests' element={ <Interests /> } />
                <Route path='*' element={ <Navigate to='/dashboard' /> } />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App
