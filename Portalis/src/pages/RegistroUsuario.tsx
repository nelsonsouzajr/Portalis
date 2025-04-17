// src/pages/RegistroUsuario.tsx
import { useState } from 'react';
import BackButton from '../components/BackButton';


const RegistroUsuario = () => {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState<'Morador' | 'Visitante'>('Morador');
  const [usuarios, setUsuarios] = useState([
    { id: 1, nome: 'Ana Souza', tipo: 'Morador' },
    { id: 2, nome: 'Carlos Pereira', tipo: 'Visitante' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome) return;
    const novoUsuario = {
      id: usuarios.length + 1,
      nome,
      tipo,
    };
    setUsuarios([novoUsuario, ...usuarios]);
    setNome('');
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">Registro de Usuário</h1>

      <form onSubmit={handleSubmit} className="mb-6 max-w-xl mx-auto bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            placeholder="Digite o nome"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value as 'Morador' | 'Visitante')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="Morador">Morador</option>
            <option value="Visitante">Visitante</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          Registrar Usuário
        </button>
      </form>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Usuários Registrados</h2>
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id} className="border-b py-2">
              <span className="font-medium">{usuario.nome}</span> - <span>{usuario.tipo}</span>
            </li>
          ))}
        </ul>
        <div className="p-8 min-h-screen bg-gray-100">
      <BackButton />

      <h1 className="text-2xl font-bold mb-6 text-center">Configurações</h1>
      <p>Aqui você pode configurar suas preferências...</p>
    </div>
      </div>
    </div>
  );
};

export default RegistroUsuario;
