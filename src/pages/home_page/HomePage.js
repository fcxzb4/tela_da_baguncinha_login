import { FixedSizeGrid } from "react-window";
import styles from './home.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  const [cards, setCards] = useState(
    Array.from({ length: 1 }, (_, i) => ({
      Id: i + 1,
      Nome: `jacú ${i + 1}`,
      gif: './../../img/card_pixel.gif',
    }))
  );

  const columnCount = 3;
  const columnWidth = 400;
  const rowHeight = 480

  // rowCount dinâmico baseado no número de cards + 1 (botão de adicionar)
 const totalItems = cards.length + 1; // inclui o botão "+"
 const rowCount = Math.ceil(totalItems / columnCount);

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
                Nome: `jacú ${cards.length + 1}`
              };
              setCards([...cards, newCard]);
            }}
          >
            <div className={styles.create}>
            <h1 style={{ fontSize: "5vw" }}>+</h1>
            </div>
          </div>
        </div>
      );
    }

    if (index > cards.length) return null;

    const card = cards[index];

    return (
      <div style={{ ...style, padding: "0", margin: "0", boxSizing: "border-box", borderRadius: "20px" }}>
        <div className={styles.Card}>
          <div className={styles.cardp}>
            <h4 className={styles.name}>{card.Nome}</h4>
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
  <FixedSizeGrid
  style={{ overflow: '' }} // scroll apenas se necessário
  columnCount={columnCount}
  rowCount={rowCount}
  columnWidth={columnWidth}
  rowHeight={rowHeight}
  width={columnCount * columnWidth}
  height={Math.min(rowCount * rowHeight, 800)} // 800px ou menos
  className={styles.Fckscroll}
>
  {Cell}
</FixedSizeGrid>
  )
}

export default HomePage;
