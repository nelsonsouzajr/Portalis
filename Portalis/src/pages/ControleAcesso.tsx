// src/pages/ControleAcesso.tsx
import { useState } from 'react';
import BackButton from '../components/BackButton';


const ControleAcesso = () => {
  const [filtro, setFiltro] = useState('');

  const acessos = [
    { id: 1, nome: 'João Silva', tipo: 'Morador', data: '17/04/2025', hora: '08:12', acao: 'Entrada' },
    { id: 2, nome: 'Maria Santos', tipo: 'Visitante', data: '17/04/2025', hora: '09:05', acao: 'Saída' },
    { id: 3, nome: 'Carlos Souza', tipo: 'Prestador', data: '16/04/2025', hora: '14:33', acao: 'Entrada' },
  ];

  const acessosFiltrados = acessos.filter(acesso =>
    acesso.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-750 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Controle de Acesso</h1>

      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Filtrar por nome..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="px-4 py-2 w-full max-w-md border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Nome</th>
              <th className="py-3 px-4 text-left">Tipo</th>
              <th className="py-3 px-4 text-left">Data</th>
              <th className="py-3 px-4 text-left">Hora</th>
              <th className="py-3 px-4 text-left">Ação</th>
            </tr>
          </thead>
          <tbody>
            {acessosFiltrados.map((acesso) => (
              <tr key={acesso.id} className="border-b">
                <td className="py-2 px-4">{acesso.nome}</td>
                <td className="py-2 px-4">{acesso.tipo}</td>
                <td className="py-2 px-4">{acesso.data}</td>
                <td className="py-2 px-4">{acesso.hora}</td>
                <td className="py-2 px-4">{acesso.acao}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-8 min-h-screen bg-gray-750">
      <BackButton />

      
    </div>
      </div>
    </div>
  );
};

export default ControleAcesso;
