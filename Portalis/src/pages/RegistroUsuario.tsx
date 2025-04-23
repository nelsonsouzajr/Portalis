// src/pages/RegistroUsuario.tsx
import { useState, useRef } from "react";
import BackButton from "../components/BackButton";




const validarSenha = (senha: string) => {
  const regex = /^\d{6}$/; // Expressão regular para exatamente 6 números
  return regex.test(senha);
};

const RegistroUsuario = () => {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    dataNascimento: "",
    endereco: "",
    tipoDocumento: "CPF",
    numeroDocumento: "",
    foto: "",
    telefoneContato: "",
    telefoneSecundario: "",
    email: "",
    profissao: "",
    condicao: "Visitante",
    proprietarioResponsavel: "",
    senhaAcesso: "",
    confirmaSenha: "",
    senhaEmergencia: "",
    confirmaSenhaEmergencia: "",
    observacao: "",
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [showOptions, setShowOptions] = useState(false);
  const [showCamera, setShowCamera] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFotoClick = () => {
    setShowOptions(true); // Mostra opções: câmera ou arquivo
  };

  const handleEscolherArquivo = () => {
    setShowOptions(false);
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleAbrirCamera = async () => {
    setShowOptions(false);
    setShowCamera(true);

    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }
  };

  const capturarFoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.drawImage(videoRef.current, 0, 0, 160, 160);
        const dataURL = canvasRef.current.toDataURL("image/png");
        setPreviewImage(dataURL);
        setShowCamera(false);

        // Para parar o vídeo
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    }
    
  };

  const [documentoExiste, setDocumentoExiste] = useState(false);
  const [documentoValido, setDocumentoValido] = useState(false);
  const [nomeProprietario, setNomeProprietario] = useState("");
  const [senhaValida, setSenhaValida] = useState(false);
  const [senhaEmergenciaValida, setSenhaEmergenciaValida] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const isDocumentoValido = (tipoDocumento: string, numero: string): boolean => {
      if (!numero) {
        alert("Número de documento inválido.");
        return false;
      }
    
      if (tipoDocumento === "CPF") {
        return /^\d{11}$/.test(numero); // CPF deve ter 11 dígitos
      } else if (tipoDocumento === "CNH" || tipoDocumento === "RG") {
        return /^\d{9}$/.test(numero); // CNH e RG devem ter 9 dígitos
      }
    
      return false; // Retorno final para evitar `undefined`
    };
    

    if (name === "numeroDocumento") {
      setDocumentoValido(isDocumentoValido(value, formData.numeroDocumento));
    }
    
    if (name === "numeroDocumento") {
      setDocumentoExiste(value === "123456789");
    }

    if (name === "proprietarioResponsavel") {
      setNomeProprietario(value === "987654321" ? "João da Silva" : "");
    }

    if (name === "senha") {
      setSenhaValida(validarSenha(value));
    }

    if (name === "senhaEmergencia") {
      setSenhaEmergenciaValida(validarSenha(value));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const camposObrigatorios = [
      "nome", "sobrenome", "dataNascimento", "endereco",
      "tipoDocumento", "numeroDocumento", "foto", "telefoneContato",
      "profissao", "condicao", "senhaAcesso", "confirmaSenha",
      "senhaEmergencia", "confirmaSenhaEmergencia"
    ];

    for (const campo of camposObrigatorios) {
      if (!formData[campo as keyof typeof formData]) {
        alert(`O campo ${campo} é obrigatório.`);
        return;
      }
    }

    if (formData.senhaAcesso !== formData.confirmaSenha) {
      alert("As senhas não coincidem.");
      return;
    }
    if (formData.senhaEmergencia !== formData.confirmaSenhaEmergencia || formData.senhaEmergencia === formData.senhaAcesso) {  
      alert("As senhas de emergência não coincidem. Senha de emergência não pode ser igual a senha de acesso.");
      return;
    }
    if (documentoExiste) {
      alert("O número do documento já está cadastrado.");
      return;
    }
    if (!documentoValido) {
      alert("O número do documento é inválido.");
      return;
    }
    if (formData.condicao === "Morador" && !nomeProprietario) {
      alert("O proprietário responsável não foi encontrado.");
      return;
    }
    if (formData.condicao === "Morador" && !senhaValida) {
      alert("A senha não é válida.");
      return;
    }
    if (formData.condicao === "Morador" && !senhaEmergenciaValida) {
      alert("A senha de emergência não é válida.");
      return;
    }

    console.log("Usuário registrado com sucesso:", formData);
    alert("Usuário registrado com sucesso!");
  };

  const isMorador = formData.condicao === "Morador";
  const isMoradorOuProprietario = ["Morador", "Proprietário"].includes(formData.condicao);

  return (

    
    <div className="p-5 min-h-screen bg-gray-750">
      <h1 className="text-2xl font-bold mb-6 text-center">Registro de Usuário</h1>

      <form onSubmit={handleSubmit} className="mb-6 max-w-2xl mx-auto p-6 rounded shadow-md bg-gray-600 space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3"> 

        <div className="flex flex-col items-center space-y-2">
          <label className="text-sm font-medium text-gray-200 mb-1 text-center" >Foto</label>

          <div
            className="w-35 h-35 bg-white border border-gray-300 rounded-full overflow-hidden flex items-center justify-center cursor-pointer"
            onClick={handleFotoClick}
          >
            {previewImage ? (
              <img src={previewImage} alt="Prévia da foto" className="w-30 h-30 object-cover" />
            ) : (
              <span className="text-gray-650 text-sm">Clique para adicionar foto</span>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        {/* Modal de opções */}
        {showOptions && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 space-y-4 text-center">
              <p className="text-gray-800 font-semibold">Como deseja adicionar a foto?</p>
              <button
                onClick={handleEscolherArquivo}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
              >
                Escolher do Arquivo
              </button>
              <button
                onClick={handleAbrirCamera}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
              >
                Tirar com a Câmera
              </button>
              <button
                onClick={() => setShowOptions(false)}
                className="w-full text-sm text-gray-500 mt-2"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        {/* Visualização da Câmera */}
        {showCamera && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50 space-y-4">
            <video ref={videoRef} className="w-40 h-40 rounded-xl" />
            <canvas ref={canvasRef} width={160} height={160} className="hidden" />
            <button
              onClick={capturarFoto}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
            >
              Capturar Foto
            </button>
            <button
              onClick={() => {
                setShowCamera(false);
                const stream = videoRef.current?.srcObject as MediaStream;
                stream?.getTracks().forEach((track) => track.stop());
              }}
              className="text-sm text-white underline"
            >
              Cancelar
            </button>
          </div>
        )}
          <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">Observação</label>
          <textarea
            name="observacao"
            value={formData.observacao}
            onChange={handleChange}
            className="w-full h-40 px-4 py-2 border border-gray-300 rounded-md resize-none"
            placeholder="Observação"
          />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Nome</label>
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Nome" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Sobrenome</label>
            <input type="text" name="sobrenome" value={formData.sobrenome} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Sobrenome" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Data de Nascimento</label>
            <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Endereço</label>
            <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Endereço" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Tipo de Documento</label>
            <select name="tipoDocumento" value={formData.tipoDocumento} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md">
              <option value="CPF">CPF</option>
              <option value="CNH">CNH</option>
              <option value="RG">RG</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Número do Documento</label>
            <input type="text" name="numeroDocumento" value={formData.numeroDocumento} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Número do Documento" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Telefone de Contato</label>
            <input type="text" name="telefoneContato" value={formData.telefoneContato} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Telefone de Contato" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Telefone Secundário</label>
            <input type="text" name="telefoneSecundario" value={formData.telefoneSecundario} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Telefone Secundário" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Email" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Profissão</label>
            <input type="text" name="profissao" value={formData.profissao} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Profissão" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Condição</label>
            <select name="condicao" value={formData.condicao} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md">
              <option value="Visitante">Visitante</option>
              <option value="Morador">Morador</option>
              <option value="Proprietário">Proprietário</option>
              <option value="Porteiro">Porteiro</option>
              
            </select>
          </div>
          
          
          {/* Outros campos seguem a mesma estrutura */}

          {isMorador && (
  <div className="md:col-span-2">
    <label className="block text-sm font-medium text-gray-200 mb-1">Proprietário Responsável</label>
    <input type="text" name="proprietarioResponsavel" value={formData.proprietarioResponsavel} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Nome do proprietário" />
  </div>
)}

{isMoradorOuProprietario && (
  <>
    <div>
      <label className="block text-sm font-medium text-gray-200 mb-1">Senha de Acesso</label>
      <input type="password" name="senhaAcesso" value={formData.senhaAcesso} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-200 mb-1">Confirmar Senha de Acesso</label>
      <input type="password" name="ConfirmasenhaAcesso" value={formData.senhaAcesso} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-200 mb-1">Senha de Emergência</label>
      <input type="password" name="senhaEmergencia" value={formData.senhaEmergencia} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-200 mb-1">Confirmar Senha de Emergência</label>
      <input type="password" name="ConfirmasenhaEmergencia" value={formData.senhaEmergencia} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
    </div>
  </>
)}


          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">
            Registrar Usuário
          </button>
        </div>
      </form>

      <BackButton />
    </div>
  
  );
};

export default RegistroUsuario;
