// src/pages/RegistroEntradaSaida.tsx
import { useState } from 'react';
import BackButton from '../components/BackButton';


const RegistroEntradaSaida = () => {
  const [registro, setRegistro] = useState('');
  const [historico, setHistorico] = useState([
    { id: 1, nome: 'Fernando Almeida', tipo: 'Entrada', data: '17/04/2025 - 10:45' },
    { id: 2, nome: 'Julia Costa', tipo: 'Saída', data: '17/04/2025 - 11:02' },
  ]);

  const handleRegistrar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!registro) return;
    const novoRegistro = {
      id: historico.length + 1,
      nome: registro,
      tipo: 'Entrada', // Pode ser alterado para 'Saída' se necessário
      data: new Date().toLocaleString(),
    };
    setHistorico([novoRegistro, ...historico]);
    setRegistro('');
  };

  return (
    <div className="p-8 min-h-screen bg-gray-750">
      <h1 className="text-2xl font-bold mb-6 text-center">Registro de Entrada e Saída</h1>

      <form onSubmit={handleRegistrar} className="w-full mb-6 max-w-xl mx-auto bg-gray-600 p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-100 mb-1">Nome</label>
          <input
            type="text"
            value={registro}
            onChange={(e) => setRegistro(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            placeholder="Digite o nome do visitante ou morador"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
        >
          Registrar Entrada
        </button>
      </form>

      <div className="max-w-3xl mx-auto bg-gray-600 p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Histórico de Registros</h2>
        <ul>
          {historico.map((r) => (
            <li key={r.id} className="border-b py-2">
              <span className="font-medium">{r.nome}</span> - <span>{r.tipo}</span> <span className="text-gray-500">({r.data})</span>
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

export default RegistroEntradaSaida;
