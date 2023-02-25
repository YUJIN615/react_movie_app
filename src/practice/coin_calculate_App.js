import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState('');
  const [price, setPrice] = useState(0);
  const [result, setResult] = useState(0)

  const onChange = (event) => {setMoney(event.target.value)}
  const selectCoin = (event) => {
    setPrice(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    setResult(money / price);
  }

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, [])
  return (
    <div>
      <h1>The Coins ({coins.length})</h1>
      {loading ? 
      <strong>Loading...</strong> 
      : <select onChange={selectCoin}>
        {coins.map((item, index) => {
          return (
            <option key={index} value={item.quotes.USD.price}>
              {item.name} ({item.symbol}) : {item.quotes.USD.price} USD
            </option>
          )
        })}
        </select>}        
      <div>
        <form onSubmit={onSubmit}>
          My money : <input type="number" value={money} onChange={onChange}></input>
          <button>submit</button>
        </form>
      </div>
      <div>
        You can buy {result} coins
      </div>
    </div>
  );
}

export default App;
