import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from "react-router";
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Skills from './components/Skills/Skills.jsx';
import Project from './components/Project/Project.jsx';
import Certificate from './components/Certificate/Certificate.jsx';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path='skills' element={<Skills />} />
    <Route path='project' element={<Project />} />
    <Route path='certificate' element={<Certificate />} />
    <Route path='contact' element={<Contact />} />
    <Route path='about' element={<About />} />

  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,


)
