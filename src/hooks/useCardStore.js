import { useState } from 'react';
import basecards from '../components/container/cards/FormCards';

export function useCardStore  () {
  const [cards, setCards] = useState(basecards);

  const addcards = (novoCard) => {
    setCards([...cards, novoCard]);
  };

  const editcards = (id, cardAtualizado) => {
    const atualizado = cards.map(card =>
      card.id === id ? cardAtualizado : card
    );
    setCards(atualizado);
  };

  return {
    cards,
    addcards,
    editcards,
  };
};

