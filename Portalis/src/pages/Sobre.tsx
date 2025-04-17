// src/pages/Sobre.tsx
import BackButton from '../components/BackButton';


const Sobre = () => {
  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">Sobre o Portalis</h1>

      <div className="bg-white p-6 rounded shadow-md max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">O que é o Portalis?</h2>
        <p className="mb-4 text-lg">
        Este é um projeto desenvolvido para o Projeto Integrador V da UNIVESP. O objetivo principal
        deste projeto é criar uma solução para controle de acesso em condomínios, proporcionando
        uma experiência segura e eficiente para os moradores e visitantes.
      </p>
      
      <p className="text-lg">
        A plataforma foi desenvolvida com a intenção de facilitar o gerenciamento de entradas e saídas,
        com funcionalidades como o cadastro de moradores e visitantes, controle de veículos, notificações
        de autorização e muito mais.
      </p>

        <h3 className="text-lg font-semibold mb-2">Recursos Principais:</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Controle de acesso por QR Code e leitura de digital</li>
          <li>Cadastro de moradores e visitantes</li>
          <li>Relatórios de entrada e saída</li>
          <li>Integração com sistemas de rádio frequência para veículos</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Tecnologias Utilizadas:</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>Vite</li>
          <li>TypeScript</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Equipe de Desenvolvimento:</h3>
        <p className="text-gray-700 mb-4">
          Este projeto foi desenvolvido por uma equipe dedicada de profissionais da área de TI, com o objetivo de
          criar uma solução inovadora e eficaz para a gestão de acessos em condomínios.
        </p>

        <h3 className="text-lg font-semibold mb-2">Versão:</h3>
        <p className="text-gray-700">Versão 1.0.0</p>
        <div className="p-8 min-h-screen bg-gray-100">
      <BackButton />

      <h1 className="text-2xl font-bold mb-6 text-center">Configurações</h1>
      <p>Aqui você pode configurar suas preferências...</p>
    </div>
      </div>
    </div>
  );
};

export default Sobre;
