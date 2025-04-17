// src/pages/Home.tsx
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Portalis</h1>
      
      <p className="text-gray-600 mb-6 text-center max-w-xl">
        Use os botões abaixo para acessar rapidamente as funcionalidades do sistema.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow"
          onClick={() => navigate('/RegistroUsuario')}
        >
          Cadastro de Usuários (Moradores / Visitantes)
        </button>

        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl shadow"
          onClick={() => navigate('/ControleAcesso')}
        >
          Controle de Acesso
        </button>

        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-xl shadow"
          onClick={() => navigate('/RegistroEntradaSaida')}
        >
          Registros de Entrada/Saída
        </button>

        <button
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-xl shadow"
          onClick={() => navigate('/NotificacaoAutorizacao')}
        >
          Autorização e Notificações
        </button>

        <button
          className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-xl shadow"
          onClick={() => navigate('/Configuracoes')}
        >
          Configurações
        </button>

        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-xl shadow"
          onClick={() => navigate('/Sobre')}
        >
          Sobre o sistema
        </button>

        
      </div>
    </div>
  );
};

export default Home;
