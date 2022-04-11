import { useEffect, useState } from "react";

function CoinTrackerApp() {
  const [loading, setLoading] = useState(true)
  const [coins,setCoins] = useState([])
  useEffect(() =>{
    fetch("https://api.coinpaprika.com/v1/tickers").then((res) => res.json()
    .then((json)=>{
      setCoins(json);
      setLoading(false);
    }))
    
  },[])
  return (
    <div className="App">
      <h1>The Coins!({coins.length})</h1>
      {loading ? <h3>Loading...</h3> : null}
      <ul>
        {coins.map((coin)=><li>{coin.name}({coin.symbol}) {Math.floor(coin.quotes.USD.price)}$</li>)}
      </ul>
    </div>
  );

}
export default CoinTrackerApp;