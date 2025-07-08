import React, { useState } from 'react';
import styles from "./signin.module.scss"

function CadastroForm({ onSubmit }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const [errors, setErrors] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmSenha: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    // Pelo menos 6 caracteres, uma letra maiúscula, uma minúscula, um número e um símbolo
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Resetar mensagens e estados antes da nova submissão
    setSubmissionMessage('');
    setIsSuccess(false);

    let valid = true;
    const newErrors = { nome: '', email: '', senha: '', confirmSenha: '' };

    if (nome.trim().length < 2) {
      newErrors.nome = 'O nome deve ter pelo menos 2 caracteres.';
      valid = false;
    }

    if (!validateEmail(email)) {
      newErrors.email = 'Email inválido.';
      valid = false;
    }

    if (!validatePassword(senha)) {
      newErrors.senha =
        'A senha deve ter pelo menos 6 caracteres, uma letra maiúscula, uma minúscula, um número e um símbolo.';
      valid = false;
    } else if (senha !== confirmSenha) {
      newErrors.confirmSenha = 'As senhas não coincidem.';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      setIsLoading(true); // Ativa o loading APENAS se a validação inicial passar
      try {
        // Chama a função onSubmit passada via props.
        // É responsabilidade do componente pai lidar com a lógica de API/armazenamento.
        await onSubmit({ nome, email, senha });

        setSubmissionMessage('Cadastro realizado com sucesso!');
        setIsSuccess(true);
        // Limpar campos do formulário após sucesso
        setNome('');
        setEmail('');
        setSenha('');
        setConfirmSenha('');
        setErrors({ nome: '', email: '', senha: '', confirmSenha: '' }); // Limpa os erros também
      } catch (error) {
        setSubmissionMessage('Erro ao cadastrar. Tente novamente mais tarde.');
        setIsSuccess(false);
        console.error('Erro de submissão:', error);
      } finally {
        setIsLoading(false); // Desativa o loading em ambos os casos (sucesso ou erro)
      }
    } else {
      // Se a validação falhar, certifique-se de que isLoading esteja false
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.Signin}>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          disabled={isLoading}
        />
        {errors.nome && <p style={{ color: 'red', fontSize: '0.85em' }}>{errors.nome}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        {errors.email && <p style={{ color: 'red', fontSize: '0.85em' }}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="senha">Senha:</label>
        <input
          id="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          disabled={isLoading}
        />
        {errors.senha && <p style={{ color: 'red', fontSize: '0.85em' }}>{errors.senha}</p>}
      </div>

      <div>
        <label htmlFor="confirmSenha">Confirmar Senha:</label>
        <input
          id="confirmSenha"
          type="password"
          value={confirmSenha}
          onChange={(e) => setConfirmSenha(e.target.value)}
          disabled={isLoading}
        />
        {errors.confirmSenha && <p style={{ color: 'red', fontSize: '0.85em' }}>{errors.confirmSenha}</p>}
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Cadastrando...' : 'Cadastrar'}
      </button>

      {submissionMessage && (
        <p style={{ color: isSuccess ? 'green' : 'red', marginTop: '10px' }}>
          {submissionMessage}
        </p>
      )}
    </form>
    </div>
  );
}

export default CadastroForm;