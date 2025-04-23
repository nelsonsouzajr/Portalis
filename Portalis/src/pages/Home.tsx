// src/pages/Home.tsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const [tipoUsuario, setTipoUsuario] = useState<'porteiro' | 'morador' | 'sindico'>('porteiro');
  const [abaAtiva, setAbaAtiva] = useState<'moradores' | 'prestadores' | 'visitantes'>('moradores'); 
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
        <div className="dashboard">
        <h1 className="text-3xl font-bold text-center mb-6">Painel de Segurança</h1>
  
        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              abaAtiva === 'moradores' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setAbaAtiva('moradores')}
          >
            Moradores Presentes
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              abaAtiva === 'prestadores' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setAbaAtiva('prestadores')}
          >
            Prestadores de Serviço
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              abaAtiva === 'visitantes' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setAbaAtiva('visitantes')}
          >
            Visitantes
          </button>
        </div>
  
        {/* Conteúdo das Abas */}
        <div className="bg-white rounded-xl shadow p-4">
          {abaAtiva === 'moradores' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Moradores Presentes</h2>
              <table className="w-full text-left border">
                <thead>
                  <tr className="bg-gray-700">
                    <th className="p-2 border">Nome</th>
                    <th className="p-2 border">Endereço Int.</th>
                    <th className="p-2 border">Condição</th>
                    <th className="p-2 border">Visitantes Esperados</th>
                    <th className="p-2 border">Contato</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">João Silva</td>
                    <td className="p-2 border">Bloco A - 101</td>
                    <td className="p-2 border">Proprietário</td>
                    <td className="p-2 border">2</td>
                    <td className="p-2 border">(11) 91234-5678</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Maria Souza</td>
                    <td className="p-2 border">Bloco B - 202</td>
                    <td className="p-2 border">Familiar</td>
                    <td className="p-2 border">0</td>
                    <td className="p-2 border">(11) 99876-5432</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
  
          {abaAtiva === 'prestadores' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Prestadores de Serviço</h2>
              <table className="w-full text-left border">
                <thead>
                  <tr className="bg-gray-700">
                    <th className="p-2 border">Nome</th>
                    <th className="p-2 border">Contato</th>
                    <th className="p-2 border">Endereço Int.</th>
                    <th className="p-2 border">Função</th>
                    <th className="p-2 border">Autorizado por:</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">Carlos Lima</td>
                    <td className="p-2 border">(11) 91234-5678</td>
                    <td className="p-2 border">Bloco C - Hall</td>
                    <td className="p-2 border">Eletricista</td>                    
                    <td className="p-2 border">João Silva</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Juliana Rocha</td>
                    <td className="p-2 border">(11) 99876-5432</td>
                    <td className="p-2 border">Bloco D - 101</td>
                    <td className="p-2 border">Faxineira</td>                    
                    <td className="p-2 border">Maria Souza</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
  
          {abaAtiva === 'visitantes' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Visitantes</h2>
              <table className="w-full text-left border mb-6">
                <thead>
                  <tr>
                    <th className="p-2 border">Nome</th>
                    <th className="p-2 border">Endereço Int.</th>
                    <th className="p-2 border">Status</th>
                    <th className="p-2 border">Tipo Liberação</th>
                    <th className="p-2 border">Data/Hora Entrada</th>
                    <th className="p-2 border">Autorizado por:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">Lucas Almeida</td>
                    <td className="p-2 border">Bloco A - 101</td>
                    <td className="p-2 border text-yellow-600">Autorizado, não entrou</td>
                    <td className="p-2 border">Diária</td>
                    <td className="p-2 border"></td>
                    <td className="p-2 border">João Silva</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Paula Fernandes</td>
                    <td className="p-2 border">Bloco B - 303</td>
                    <td className="p-2 border text-green-600">Presente</td>
                    <td className="p-2 border">Mensal</td>
                    <td className="p-2 border">2023-10-01 14:30</td>
                    <td className="p-2 border">Maria Souza</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
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
