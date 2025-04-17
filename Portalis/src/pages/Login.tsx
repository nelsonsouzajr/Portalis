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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        <div className="space-y-4">
          <label className="block text-gray-700 mb-1">Usuário: </label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsuario(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite seu usuário"
            
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Senha: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <br>
        </br>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Entrar
        </button>
        {/* Link "Esqueci minha senha" */}
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Esqueci minha senha
            </a>
          <br></br>
        {/* Link "Faça seu cadastro" */}
        <a href="#" className="text-sm text-blue-600 hover:underline">
            Cadastrar Usuário
          </a>
        </div>
      </form>
    </div>
  );
}
