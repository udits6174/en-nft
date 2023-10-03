import './App.css'
import Wallet from './pages/Wallet'
import Home from './pages/Home';
import Member from './pages/Member'
import Error from './pages/Error'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Wallet/>},
    {path:'/home', element:<Home/>},
    {path:'/members', element:<Member/>},
    {path:'*', element:<Error/>}
  ])
  window.ethereum.on('chainChanged', (chainId) => window.location.reload());
  window.ethereum.on('accountsChanged', (chainId) => window.location.reload());
  window.ethereum.on('disconnect', (chainId) => window.location.reload());

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
