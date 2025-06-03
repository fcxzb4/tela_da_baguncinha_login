import { FixedSizeList } from "react-window";
import styles from './home.module.scss';

function HomePage({ cardheight = 250 }) {
  const Cards = Array.from({ length: 200}, (_, i) => ({
    id: i + 1,
    nome:`Cards ${i + 1}`,
  }));

  const Row = ({ index, style }) => {
    const Card = Cards[index];
    return (
      <div style={{ ...style, paddig: "20px",margin:"0 17vw"  , boxsizing: "border-box" }}>
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
    <FixedSizeList
      height={450}
      itemCount={Cards.length}
      itemSize={cardheight}
      width="70vw"
    >
      {Row}
    </FixedSizeList>
  </>
}

export default HomePage