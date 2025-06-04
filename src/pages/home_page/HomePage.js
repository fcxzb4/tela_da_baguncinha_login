import { FixedSizeGrid } from "react-window";
import styles from './Home.module.scss';

function HomePage() {
  const cards = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    nome: `Cards ${i + 1}`,
  }));

  const columnCount = 3;
  const rowCount = 3;
  const columnWidth = 200;
  const rowHeight = 250;

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;

    if (index >= cards.length) return null;

    const card = cards[index];

    return (
      <div style={{ ...style, padding: "20px", margin: "0", boxSizing: "border-box" }}>
        <div className={styles.card}>
          <h4>{card.nome}</h4>
          <p>ID: {card.id}</p>
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
    >
      {Cell}
    </FixedSizeGrid>
  );
}


export default HomePage