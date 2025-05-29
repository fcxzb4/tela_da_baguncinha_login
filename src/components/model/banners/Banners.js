import { useRef } from 'react';
import styles from './BannerSlider.module.scss';


function BannerSlider(){
  const bannersRef = useRef(null);

  const switchBanner = (n_banner) => {
    if (bannersRef.current) {
      bannersRef.current.style.left = `-${(n_banner - 1) * 100}vw`;
    }
  };

  return (
    <div className={styles['banner-container']}>
      <div className={styles.banners} ref={bannersRef}>
        <div className={styles.banner}>Banner 1</div>
        <div className={styles.banner}>Banner 2</div>
        <div className={styles.banner}>Banner 3</div>
        <div className={styles.banner}>Banner 4</div>
      </div>

      <div className={styles.controls}>
        <button onClick={() => switchBanner(1)}>1</button>
        <button onClick={() => switchBanner(2)}>2</button>
        <button onClick={() => switchBanner(3)}>3</button>
        <button onClick={() => switchBanner(4)}>4</button>
      </div>
    </div>
  );
};
export default BannerSlider;
