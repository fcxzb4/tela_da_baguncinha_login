import { FixedSizeGrid } from "react-window";
import styles from './home.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  const [cards, setCards] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      Id: i + 1,
      Nome: `jacú ${i + 1}`,
      gif: './../../img/card_pixel.gif',
    }))
  );

  const columnCount = 3;
  const columnWidth = 250;
  const rowHeight = 300;

  // rowCount dinâmico baseado no número de cards + 1 (botão de adicionar)
  const rowCount = Math.ceil(cards.length / columnCount);

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;

    // Se o index for maior do que a quantidade de cards, mostre o botão "+"
    if (index === cards.length) {
      return (
        <div style={style}>
          <div
            className={`${styles.Card} ${styles.AddCard}`}
            onClick={() => {
              const newCard = {
                Id: cards.length + 1,
                Nome: `jacú ${cards.length + 1}`,
                gif: './../../img/card_pixel.gif',
              };
              setCards([...cards, newCard]);
            }}
          >
            <h1 style={{ fontSize: "4vw" }}>+</h1>
          </div>
        </div>
      );
    }

    if (index > cards.length) return null;

    const card = cards[index];

    return (
      <div style={{ ...style, padding: "0", margin: "0  ", boxSizing: "border-box", borderRadius: "20px" }}>
        <div className={styles.Card}>
          <div className={styles.cardp}>
            <h4>{card.Nome}</h4>
            <p className={styles.typing}>ID: {card.Id}</p>
            <div>
              <button
                className={styles.BinButton}
                onClick={() => {
                  const updatedCards = cards.filter((_, i) => i !== index);
                  setCards(updatedCards);
                }}
              >
                <FontAwesomeIcon icon={faTrashCan} size="2x" />
              </button>
              <button className={styles.PencilButton}>
                <FontAwesomeIcon icon={faPencil} size="2x" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
     <div style={{ paddingTop: "57vh" }}>
    <FixedSizeGrid
      style={{ overflow: 'visible' }}
      columnCount={columnCount}
      rowCount={rowCount}
      columnWidth={columnWidth}
      rowHeight={rowHeight}
      width={columnCount * columnWidth}
      height={rowCount * rowHeight}
      className={styles.Fckscroll}
    >
      {Cell}
    </FixedSizeGrid>
    </div>
  );
}

export default HomePage;
