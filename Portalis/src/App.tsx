import { Routes, Route, useLocation } from 'react-router-dom'
import portalisLogo from './assets/LogoPortalis.png'

import Configuracoes from './pages/Configuracoes'
import ControleAcesso from './pages/ControleAcesso'
import Home from './pages/Home'
import Login from './pages/Login'
import NotificacaoAutorizacao from './pages/NotificacaoAutorizacao'
import RegistroEntradaSaida from './pages/RegistroEntradaSaida'
import RegistroUsuario from './pages/RegistroUsuario'
import Sobre from './pages/Sobre'
import './styles/App.css'

function App() {
  const location = useLocation();

  const isLoginPage = location.pathname === '/';

  return (
    <>
      <div>
        {isLoginPage && (
          <div>
            <img 
              src={portalisLogo} 
              className="logo"  
              alt="Portalis Logo" 
            />
            <h1 className="text-logo">Portalis</h1>
          </div>
        )}

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
    </>
  )
}

export default App
