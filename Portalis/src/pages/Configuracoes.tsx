// src/pages/Configurações.tsx
import { useState } from 'react';
import BackButton from '../components/BackButton';



const Configuracoes = () => {
  const [language, setLanguage] = useState('pt');
  const [theme, setTheme] = useState('light');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode salvar as preferências em um backend ou localStorage
    alert('Configurações salvas com sucesso!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSave}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Configurações</h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Idioma
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="pt">Português</option>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Tema
          </label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="light">Claro</option>
            <option value="dark">Escuro</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Salvar
        </button>
      </form>     
    
    <div className="p-8 min-h-screen bg-gray-100">
    <BackButton />

    <h1 className="text-2xl font-bold mb-6 text-center">Configurações</h1>
    <p>Aqui você pode configurar suas preferências...</p>
  </div>
  </div>
  );
};

export default Configuracoes;
