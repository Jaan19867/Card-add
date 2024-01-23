import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom"
import Layout from './components/Layout'
import CreateCard from './components/CreateCard'

const router=createBrowserRouter(


   createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
         <Route path='' element={<App/>}/>
         <Route path='create' element={<CreateCard/>}/>
    </Route>
   )
)

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider  router={router}/>
)
