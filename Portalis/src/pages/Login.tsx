import { useState } from "react";
import { useEffect } from "react";


export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "Login - Portalis";
  }, []);

  const handleLogin = () => {
    console.log('Usuário:', usuario);
    console.log('Senha:', password);
    // Aqui futuramente entra a integração com backend
  };

  
  

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Login
        </h2>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Usuário: </label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsuario(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-900 bg-white"
            placeholder="Digite seu usuário"
            
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Senha: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-900 bg-white"
            placeholder="••••••••"
          />
        </div>
      

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Entrar
        </button>
        {/* Link "Esqueci minha senha" */}
        <div className="mt-4 flex flex-col items-center gap-3 text-sm">
          <a href="#" className="text-blue-600 hover:underline">
            Esqueci minha senha
            </a>
          
        {/* Link "Faça seu cadastro" */}
        <a href="#" className="text-blue-600 hover:underline">
            Cadastrar Usuário
          </a>
        </div>
      </form>
    </div>
  );
}
