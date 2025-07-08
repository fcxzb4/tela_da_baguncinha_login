// src/pages/sign_in_page/CadastroForm.test.js
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CadastroForm from './CadastroForm';

// REMOVER OU COMENTAR: Não precisamos mais mockar o localStorage se o componente não o usa.
// const localStorageMock = {
//   getItem: jest.fn(),
//   setItem: jest.fn(),
//   removeItem: jest.fn(),
//   clear: jest.fn(),
// };
// Object.defineProperty(window, 'localStorage', { value: localStorageMock });


describe('CadastroForm', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    // REMOVER OU COMENTAR: Limpar os mocks do localStorage não é mais necessário.
    // localStorageMock.clear.mockClear();
    // localStorageMock.setItem.mockClear();
    // localStorageMock.getItem.mockClear();
    jest.clearAllTimers();
  });

  // --- Teste 1: Renderiza todos os campos ---
  it('renderiza todos os campos, incluindo confirmar senha', () => {
    render(<CadastroForm onSubmit={jest.fn()} />);
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Senha:')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirmar Senha:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cadastrar/i })).toBeInTheDocument();
  });

  // --- Teste 2: Mostra mensagens de erro se campos forem inválidos ---
  it('mostra mensagens de erro se campos forem inválidos ou senhas não coincidirem', async () => {
    render(<CadastroForm onSubmit={jest.fn()} />);
    const button = screen.getByRole('button', { name: /cadastrar/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/o nome deve ter pelo menos 2 caracteres/i)).toBeInTheDocument();
      expect(screen.getByText(/email inválido/i)).toBeInTheDocument();
      expect(screen.getByText(/a senha deve ter pelo menos 6 caracteres/i)).toBeInTheDocument();
    });

    const nomeInput = screen.getByLabelText(/nome/i);
    const emailInput = screen.getByLabelText(/email/i);
    const senhaInput = screen.getByLabelText('Senha:');
    const confirmSenhaInput = screen.getByLabelText('Confirmar Senha:');

    fireEvent.change(nomeInput, { target: { value: 'João' } });
    fireEvent.change(emailInput, { target: { value: 'joao@mail.com' } });
    fireEvent.change(senhaInput, { target: { value: 'Senha1@' } });
    fireEvent.change(confirmSenhaInput, { target: { value: 'OutraSenha1@' } });

    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/as senhas não coincidem/i)).toBeInTheDocument();
    });
  });

  // --- Teste 3: Chama onSubmit com dados válidos, limpa o formulário e mostra mensagem de sucesso ---
  // RENOMEAR O TESTE PARA REMOVER "e guarda no localStorage"
  it('chama onSubmit com dados válidos, limpa o formulário e mostra mensagem de sucesso', async () => {
    const mockOnSubmit = jest.fn(() => Promise.resolve()); // Simula sucesso
    render(<CadastroForm onSubmit={mockOnSubmit} />);

    const nomeInput = screen.getByLabelText(/nome/i);
    const emailInput = screen.getByLabelText(/email/i);
    const senhaInput = screen.getByLabelText('Senha:');
    const confirmSenhaInput = screen.getByLabelText('Confirmar Senha:');
    const button = screen.getByRole('button', { name: /cadastrar/i });

    fireEvent.change(nomeInput, { target: { value: 'João' } });
    fireEvent.change(emailInput, { target: { value: 'joao@mail.com' } });
    fireEvent.change(senhaInput, { target: { value: 'Senha1@' } });
    fireEvent.change(confirmSenhaInput, { target: { value: 'Senha1@' } });

    fireEvent.click(button);

    jest.runAllTimers(); // Resolve promises e timers assíncronos

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });

    expect(mockOnSubmit).toHaveBeenCalledWith({
      nome: 'João',
      email: 'joao@mail.com',
      senha: 'Senha1@',
    });

    // REMOVER ESTA ASSERÇÃO: Não estamos mais testando o localStorage.
    // await waitFor(() => {
    //   expect(localStorageMock.setItem).toHaveBeenCalledTimes(1);
    //   expect(localStorageMock.setItem).toHaveBeenCalledWith('userRegistered', JSON.stringify({ nome: 'João', email: 'joao@mail.com' }));
    // });

    await waitFor(() => {
      expect(screen.getByText(/cadastro realizado com sucesso!/i)).toBeInTheDocument();
      expect(nomeInput).toHaveValue('');
      expect(emailInput).toHaveValue('');
      expect(senhaInput).toHaveValue('');
      expect(confirmSenhaInput).toHaveValue('');
    });

    expect(screen.queryByText(/o nome deve ter pelo menos 2 caracteres/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/email inválido/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/a senha deve ter pelo menos 6 caracteres/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/as senhas não coincidem/i)).not.toBeInTheDocument();
  });

  // --- Teste 4: Lida com estado de carregamento ---
  it('mostra estado de carregamento e desabilita o botão e inputs durante a submissão', async () => {
    const mockOnSubmit = jest.fn(() => new Promise(resolve => setTimeout(resolve, 100)));
    render(<CadastroForm onSubmit={mockOnSubmit} />);

    const nomeInput = screen.getByLabelText(/nome/i);
    const emailInput = screen.getByLabelText(/email/i);
    const senhaInput = screen.getByLabelText('Senha:');
    const confirmSenhaInput = screen.getByLabelText('Confirmar Senha:');
    const button = screen.getByRole('button', { name: /cadastrar/i });

    fireEvent.change(nomeInput, { target: { value: 'João' } });
    fireEvent.change(emailInput, { target: { value: 'joao@mail.com' } });
    fireEvent.change(senhaInput, { target: { value: 'Senha1@' } });
    fireEvent.change(confirmSenhaInput, { target: { value: 'Senha1@' } });

    fireEvent.click(button);

    expect(button).toBeDisabled();
    expect(button).toHaveTextContent(/cadastrando.../i);
    expect(nomeInput).toBeDisabled();
    expect(emailInput).toBeDisabled();
    expect(senhaInput).toBeDisabled();
    expect(confirmSenhaInput).toBeDisabled();

    jest.advanceTimersByTime(100);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
      expect(button).not.toBeDisabled();
      expect(button).toHaveTextContent(/cadastrar/i);
      expect(nomeInput).not.toBeDisabled();
      expect(emailInput).not.toBeDisabled();
      expect(senhaInput).not.toBeDisabled();
      expect(confirmSenhaInput).not.toBeDisabled();
    });
  });

  // --- Teste 5: Lida com erro na submissão ---
  // RENOMEAR O TESTE PARA REMOVER "e não limpa o localStorage"
  it('mostra mensagem de erro se a submissão falhar', async () => {
    const mockOnSubmit = jest.fn(() => Promise.reject(new Error('Erro de API')));
    render(<CadastroForm onSubmit={mockOnSubmit} />);

    const nomeInput = screen.getByLabelText(/nome/i);
    const emailInput = screen.getByLabelText(/email/i);
    const senhaInput = screen.getByLabelText('Senha:');
    const confirmSenhaInput = screen.getByLabelText('Confirmar Senha:');
    const button = screen.getByRole('button', { name: /cadastrar/i });

    fireEvent.change(nomeInput, { target: { value: 'João' } });
    fireEvent.change(emailInput, { target: { value: 'joao@mail.com' } });
    fireEvent.change(senhaInput, { target: { value: 'Senha1@' } });
    fireEvent.change(confirmSenhaInput, { target: { value: 'Senha1@' } });

    fireEvent.click(button);

    jest.runAllTimers();

    await waitFor(() => {
      expect(screen.getByText(/erro ao cadastrar\. tente novamente mais tarde\./i)).toBeInTheDocument();
    });

    // REMOVER ESTA ASSERÇÃO: Não estamos mais testando o localStorage.
    // expect(localStorageMock.setItem).not.toHaveBeenCalled();

    expect(nomeInput).toHaveValue('João');
    expect(emailInput).toHaveValue('joao@mail.com');
    expect(senhaInput).toHaveValue('Senha1@');
    expect(confirmSenhaInput).toHaveValue('Senha1@');

    expect(button).not.toBeDisabled();
    expect(button).toHaveTextContent(/cadastrar/i);
  });
});