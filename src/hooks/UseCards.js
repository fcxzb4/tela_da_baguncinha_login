import { useEffect, useState } from 'react';
import { basecards } from '../model/cards/FormCards';

const STORAGE_KEY = 'cartoes';

export const useCartoes = () => {
  const [cartoes, setCartoes] = useState([]);

  // Carrega do storage ou do model, apenas uma vez
  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);

    if (data) {
      setCartoes(JSON.parse(data));
    } else {
      // fallback para os dados do model
      setCartoes(cartoesBase);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartoesBase));
    }
  }, []);

  // Atualiza o storage quando o estado muda
  useEffect(() => {
    if (cartoes.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartoes));
    }
  }, [cartoes]);

  const adicionarCartao = (cartao) => setCartoes([...cartoes, cartao]);

  const editarCartao = (index, novoCartao) => {
    const novo = [...cartoes];
    novo[index] = novoCartao;
    setCartoes(novo);
  };

  const removerCartao = (index) => {
    const novo = [...cartoes];
    novo.splice(index, 1);
    setCartoes(novo);
  };

  return {
    cartoes,
    adicionarCartao,
    editarCartao,
    removerCartao,
  };
};