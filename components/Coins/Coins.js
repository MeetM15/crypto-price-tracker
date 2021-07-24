import styles from "./coins.module.scss";
import Link from "next/link";
const Coins = ({
  name,
  image,
  id,
  price,
  symbol,
  market_cap,
  volume,
  priceChange,
}) => {
  return (
    <Link href="/coins/[id]" as={`/coins/${id}`} passHref>
      <a>
        <div className={styles.coin_container}>
          <div className={styles.coin_row}>
            <div className={styles.coin}>
              <img src={image} alt={name} className={styles.coin_img} />
              <h1 className={styles.coin_name}>{name}</h1>
              <p className={styles.coin_symbol}>{symbol}</p>
            </div>
            <div className={styles.coin_data}>
              <p className={styles.coin_price}>${price}</p>
              <p className={styles.coin_volume}>${volume.toLocaleString()}</p>
              <p
                className={`${styles.coin_percent} ${
                  priceChange < 0 ? styles.red : styles.green
                }`}
              >
                {priceChange.toFixed(2)}%
              </p>
              <p className={styles.coin_mcap}>
                MKT CAP : {market_cap.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Coins;
