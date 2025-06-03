import { FixedSizeGrid } from "react-window";
import styles from './home.module.scss';

function HomePage() {
  const Cards = Array.from({ length: 200 }, (_, i) => ({
    id: i + 1,
    nome: `Cards ${i + 1}`,
  }));

  const Ceil = ({ index, style }) => {
    const Card = Cards[index];
    return (
      <div style={{ ...style, paddig: "20px", margin: "0 17vw", boxsizing: "border-box" }}>
        <div
          className={styles.card}
        >



          <h4>{Card.nome}</h4>
          <p>ID:{Card.id}</p>
        </div>
      </div>
    );
  };

  return <>
    <FixedSizeGrid
      columnWidth={200}
      rowHeight={250}
      columnCount={3}
      rowCount={Math.ceil(Cards.length / 3)}
      width={700}
      height={1000}
    >
      {Ceil}
    </FixedSizeGrid>
  </>
}

export default HomePage