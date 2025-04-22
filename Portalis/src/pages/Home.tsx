// src/pages/Home.tsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const [tipoUsuario, setTipoUsuario] = useState<'porteiro' | 'morador' | 'sindico'>('porteiro');

  return (
    <div className="min-h-screen bg-gray-750 flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Portalis</h1>

      <p className="text-gray-600 mb-4 text-center max-w-xl">
        Use os botões abaixo para acessar rapidamente as funcionalidades do sistema.
      </p>

      {/* Seletor Temporário de Perfil */}
      <select
        className="mb-6 px-4 py-2 border rounded shadow"
        value={tipoUsuario}
        onChange={(e) => setTipoUsuario(e.target.value as 'porteiro' | 'morador' | 'sindico')}
      >
        <option value="porteiro">Porteiro</option>
        <option value="morador">Morador</option>
        <option value="sindico">Síndico</option>
      </select>

      {/* Botões de navegação */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl mb-8">
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

      {/* Dashboard Dinâmico */}
      {tipoUsuario === 'porteiro' && (
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4 text-center">Dashboard - Porteiro</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Moradores presentes:</strong> 84</li>
            <li><strong>Visitantes no condomínio:</strong> 12</li>
            <li><strong>Localização dos visitantes:</strong> Bloco A, B e área de lazer</li>
            <li><strong>Prestadores de serviço ativos:</strong> 3 (Jardineiro, Encanador, Elétrica)</li>
            <li><strong>Visitantes autorizados para hoje:</strong> 5 ainda não entraram</li>
          </ul>
        </div>
      )}

      {/* Outros dashboards futuros */}
      {tipoUsuario === 'morador' && (
        <div className="mt-8 text-gray-600">
          <p>Ainda vamos implementar o dashboard para moradores. 🚧</p>
        </div>
      )}

      {tipoUsuario === 'sindico' && (
        <div className="mt-8 text-gray-600">
          <p>Ainda vamos implementar o dashboard para síndico. 🚧</p>
        </div>
      )}
    </div>
  );
};

export default Home;
