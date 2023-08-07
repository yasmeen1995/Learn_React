import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(1)
  const [fromCur, setFromCur] = useState("EUR")
  const [toCur, setToCur] = useState("USD")
  const [rate, setRate] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(function () {
    async function currency() {
      setIsLoading(true)
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`)
      const data = await res.json()
      console.log(data)
      console.log('yash: ', (data.rates[toCur]))
      // setVal(data)
      setRate(data.rates[toCur])
      setIsLoading(false)
    }

    if (toCur === fromCur) return setRate(amount);
    currency()
    // console.log('yash ', val)
    
  }, 
  [amount, fromCur, toCur])

  return (
    <div className="App">
     <input type="text" 
      value={amount} 
      onChange = {(e) => setAmount(Number(e.target.value))}
      disabled = {isLoading}
      />
     <select value={fromCur} onChange={(e) => setFromCur(e.target.value)} disabled = {isLoading} >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <select value={toCur} onChange={(e) =>setToCur(e.target.value)} disabled = {isLoading} >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>Converted Rate: {rate} {toCur}</p>

    </div>
  );
}


