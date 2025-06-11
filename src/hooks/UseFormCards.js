import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCardStore } from './useCardStore';

export const useFormCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id;

  const { cards, addcards, editcards } = useCardStore();

  const [formData, setFormData] = useState({
    id: '1',
    nome: 'jacú',
    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Freel%2FC8NKre2y056%2F&psig=AOvVaw3Vul_pSGDxEW8XoyxvYyIy&ust=1749687837990000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiju6ON6I0DFQAAAAAdAAAAABAL',
  });

  useEffect(() => {
    if (id !== undefined && cards[id]) {
      setFormData(cards[id]);
    }
  }, [id, cards]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoCartao = {
      id: Number(formData.id),
      nome: formData.nome,
      img: formData.img,
    };

    if (id === undefined) {
      addcards(novoCartao);
    } else {
      editcards (id, novoCartao);
    }

    navigate('/home');
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    modoEdicao: id !== undefined,
  };
};