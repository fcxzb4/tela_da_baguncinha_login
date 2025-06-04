import { FixedSizeGrid } from "react-window";
import styles from './home.module.scss';

function HomePage() {
  const cards = Array.from({ length: 10 }, (_, i) => ({
    Id: i + 1,
    Nome: ` jacú  ${i + 1}`,
  }));

  const columnCount = 3;
  const rowCount = 3;
  const columnWidth = 200;
  const rowHeight = 200;

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;

    if (index >= cards.length) return null;

    const card = cards[index];

    return (
      <div style={{ ...style, padding: "50px", margin: "0", boxSizing: "border-box", borderRadius:"20px", border:"solid" }}>
        <div className={styles.Card}>
          <h4>{card.Nome}</h4>
          <p>ID: {card.Id}</p>
        </div>
      </div>
    );
  };

  return (
    <FixedSizeGrid
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
  );
}


export default HomePage