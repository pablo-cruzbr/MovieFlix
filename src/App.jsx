import { useState } from 'react'

import '../src/index.css'
import RoutesApp from './router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <ToastContainer autoClose={3000}/>
      <RoutesApp/>
    </div>
  )
}

export default App
