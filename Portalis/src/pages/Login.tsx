//usuario: admin
//senha: 123456

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login - Portalis";
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Inicia o loading

    setTimeout(() => { // Simula tempo de resposta
      const usuarioTeste = "admin";
      const senhaTeste = "123456";

      if (usuario === usuarioTeste && password === senhaTeste) {
        navigate("/home");
      } else {
        alert("Usuário ou senha inválidos!");
      }

      setLoading(false); // Finaliza o loading
    }, 1000); // 1 segundo de simulação (pode ajustar depois)
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
          <label className="block text-sm font-medium text-gray-700">Usuário:</label>
          <input
            type="text"
            id="username"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
            disabled={loading}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-900 bg-white"
            placeholder="Digite seu usuário"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-900 bg-white"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-md transition-colors duration-200 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>

        <div className="mt-4 flex flex-col items-center gap-3 text-sm">
          <a href="#" className="text-blue-600 hover:underline">
            Esqueci minha senha
          </a>

          <a href="#" className="text-blue-600 hover:underline">
            Cadastrar Usuário
          </a>
        </div>
      </form>
    </div>
  );
}
