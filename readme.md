# 🌐 Portalis

> Sistema inteligente de controle de entrada e saída em condomínios, oferecendo segurança, agilidade e organização através de um painel responsivo e interativo.

---

## 📌 Descrição

Portalis é uma aplicação web desenvolvida em **React + TypeScript**, com build feita pelo **Vite**, voltada para a gestão de acessos em condomínios. Permite o registro de moradores, visitantes, entradas e saídas, bem como o envio de notificações e autorizações, tudo em um ambiente intuitivo e responsivo.

---

## 🚀 Tecnologias Utilizadas

- **React** (v18+)
- **TypeScript**
- **Vite** (Build Tool)
- **React Router DOM** – Gerenciamento de rotas
- **Recoil** – Gerenciamento de estado global
- **Tailwind CSS** – Estilização utilitária
- **@types/react / @types/react-dom** – Tipagens auxiliares
- **@vitejs/plugin-react** – Suporte aprimorado para React no Vite

---

## 📁 Estrutura de Pastas

```
src/
├── assets/                 # Imagens, ícones e recursos estáticos
├── components/             # Componentes reutilizáveis
├── pages/                  # Páginas principais da aplicação
│   ├── Configuracoes/
│   ├── ControleAcesso/
│   ├── Home/
│   ├── Login/
│   ├── NotificacaoAutorizacao/
│   ├── RegistroEntradaSaida/
│   ├── RegistroUsuario/
│   └── Sobre/
├── routes/                 # Arquivo de definição das rotas da aplicação
├── services/               # Serviços de API e integrações externas
├── store/                  # Configuração do Recoil
├── style/                  # Configurações e customizações do Tailwind
└── main.tsx                # Arquivo de entrada da aplicação
```

---

## 🧪 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/portalis.git
cd portalis

# Instale as dependências
npm install
```

---

## ▶️ Executando a Aplicação

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Acesse no navegador:
http://localhost:5173
```

---

## 📦 Comandos Utilizados na Inicialização

```bash
npm create vite@latest Portalis -- --template react-ts
npm install react-router-dom
npm install recoil
npm install tailwindcss @tailwindcss/vite
npm install --save-dev @types/react @types/react-dom
npm install @vitejs/plugin-react --save-dev
npm run dev
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você quiser sugerir melhorias ou reportar problemas:

1. Fork este repositório
2. Crie uma branch com sua feature: `git checkout -b minha-feature`
3. Commit suas mudanças: `git commit -m 'feat: adiciona minha feature'`
4. Push para a branch: `git push origin minha-feature`
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está licenciado sob a **MIT License** – veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👨‍💻 Autor

**Nelson Pereira de Souza Junior**  
Engenheiro da Computação | Bombeiro Militar | Desenvolvedor Full Stack  
[LinkedIn](https://www.linkedin.com/in/nelsonpsjunior) | [YouTube (Kaen)](https://www.youtube.com/@Kaen)

