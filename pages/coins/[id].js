import Layout from "../../components/Layout/Layout";
import styles from "./coin.module.scss";
const Coin = ({ coin }) => {
  return (
    <Layout>
      <div className={styles.coin_page}>
        <div className={styles.coin_container}>
          <div className={styles.coin_img_container}>
            <img
              src={coin.image.large}
              alt={coin.name}
              className={styles.coin_image}
            />
          </div>
          <div className={styles.coin_data}>
            <h1 className={styles.coin_name}>{coin.name}</h1>
            <p className={styles.coin_symbol}>{coin.symbol}</p>
            <p className={styles.coin_price}>
              ${coin.market_data.current_price.usd}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Coin;
export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const coin = await res.json();
  return {
    props: {
      coin,
    },
  };
};
