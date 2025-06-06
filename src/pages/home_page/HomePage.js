import { FixedSizeGrid } from "react-window";
import styles from './home.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  const [cards ,setCartoes] = useState{
   Array.from({ length: 10 }, (_, i) => ({
    Id: i + 1,
    Nome: ` jacú  ${i + 1}`,
  }));
  }

  const columnCount = 3;
  const rowCount = 3;
  const columnWidth = 250;
  const rowHeight = 250;

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * 5 + columnIndex;

    if (index - 1 >= cards.length) {
      return null
    }
    else if (index >= cards.length) {
      return (
        <div style={{ ...style }}>
          <div className={`${styles.Card} ${styles.AddCard}`} onClick={
            () => {
              const newcard= {
                id: card.length + 1,
                nome: `Cartão ${cartoes.length + 1}`,
                img: "https://th.bing.com/th/id/OIP.GELKQ4d2ogvLPHMtaI4UygHaHa?rs=1&pid=ImgDetMain",
              };
              setCartoes([...cartoes, novoCartao]);
            }
          }>
            <h1 style={{ fontSize: "5vw" }}>+</h1>
          </div>
        </div>
      );
    } else {
      const card = cards[index];

      return (
        <div style={{ ...style, padding: "0", margin: "0", boxSizing: "border-box", borderRadius: "20px" }}>
          <div className={styles.Card}>
            <div className={styles.cardp}>
              <h4>{card.Nome}</h4>
              <p className={styles.typing}> ID: {card.Id}</p>
              <div>
                <button className={styles.BinButton} onClick={() => {
                  setCartoes(
                    [
                      ...cartoes.slice(0, index),
                      ...cartoes.slice(index + 1)
                    ]
                  );
                }}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
                <button className={styles.PencilButton}>
                  <FontAwesomeIcon icon={faPencil} />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };

    return <>
      <FixedSizeGrid
        style={{ overflow: 'visible' }}
        columnCount={columnCount}
        rowCount={rowCount}
        columnWidth={columnWidth}
        rowHeight={rowHeight}
        width={columnCount * columnWidth}
        height={rowCount * rowHeight}
        className={styles.Fckscroll}
        overflow='scroll'
      >
        {Cell}
      </FixedSizeGrid>
    </>
  }


  export default HomePage