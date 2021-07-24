import Coins from "../Coins/Coins";

const CoinList = ({ coinList }) => {
  return (
    <>
      {coinList.map((coin) => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.current_price}
            symbol={coin.symbol}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
            market_cap={coin.market_cap}
            volume={coin.total_volume}
          />
        );
      })}
    </>
  );
};

export default CoinList;
