import { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Configuracoes from './pages/Configuracoes'
import ControleAcesso from './pages/ControleAcesso'
import Home from './pages/Home'
import Login from './pages/Login'
import NotificacaoAutorizacao from './pages/NotificacaoAutorizacao'
import RegistroEntradaSaida from './pages/RegistroEntradaSaida'
import RegistroUsuario from './pages/RegistroUsuario'
import Sobre from './pages/Sobre'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Configuracoes" element={<Configuracoes />} />
        <Route path="/ControleAcesso" element={<ControleAcesso />} />
        <Route path="/NotificacaoAutorizacao" element={<NotificacaoAutorizacao />} />
        <Route path="/RegistroEntradaSaida" element={<RegistroEntradaSaida />} />
        <Route path="/RegistroUsuario" element={<RegistroUsuario />} />
        <Route path="/Sobre" element={<Sobre />} />
      </Routes>
    </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
    
  )
}

export default App
