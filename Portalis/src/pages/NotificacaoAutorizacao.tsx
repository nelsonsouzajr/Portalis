// src/pages/NotificacaoAutorizacao.tsx
import { useState } from 'react';
import BackButton from '../components/BackButton';


const NotificacaoAutorizacao = () => {
  const [nomeVisitante, setNomeVisitante] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [autorizacoes, setAutorizacoes] = useState([
    { id: 1, nome: 'Fernando Almeida', status: 'Autorizado', data: '17/04/2025 - 10:45' },
    { id: 2, nome: 'Julia Costa', status: 'Pendente', data: '17/04/2025 - 11:02' },
  ]);

  const handleEnviar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nomeVisitante) return;
    const novaAutorizacao = {
      id: autorizacoes.length + 1,
      nome: nomeVisitante,
      status: 'Pendente',
      data: new Date().toLocaleString(),
    };
    setAutorizacoes([novaAutorizacao, ...autorizacoes]);
    setNomeVisitante('');
    setMensagem('');
  };

  return (
    <div className="p-8 min-h-screen bg-gray-750">
      <h1 className="text-2xl font-bold mb-6 text-center">Notificações e Autorizações</h1>

      <form onSubmit={handleEnviar} className="mb-6 max-w-xl mx-auto bg-gray-600 p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Visitante</label>
          <input
            type="text"
            value={nomeVisitante}
            onChange={(e) => setNomeVisitante(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            placeholder="Digite o nome"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            placeholder="Mensagem opcional"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          Enviar Autorização
        </button>
      </form>

      <div className="max-w-3xl mx-auto bg-gray-600 p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Autorizações Recentes</h2>
        <ul>
          {autorizacoes.map((a) => (
            <li key={a.id} className="border-b py-2">
              <span className="font-medium">{a.nome}</span> - <span>{a.status}</span> <span className="text-gray-500">({a.data})</span>
            </li>
          ))}
        </ul>
        <div className="p-8 bg-gray-750">
      <BackButton />

      
    </div>
      </div>
    </div>
  );
};

export default NotificacaoAutorizacao;
