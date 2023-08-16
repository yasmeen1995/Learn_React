import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1> useReducer Bank Account</h1>
      <h4>Balance: X</h4>
      <h4>Loan: X</h4>
      <div className="ButtonContainer">
        <button className="Button">Open account</button>
        <button className="Button">Deposit 150</button>
        <button className="Button">Withdraw 50</button>
        <button className="Button">Request a loan of 5000</button>
        <button className="Button">Pay loan</button>
        <button className="Button">Close account</button>
      </div>
    </div>
  );
}

export default App;
