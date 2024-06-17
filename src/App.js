import './App.css';


const stockdata = [
  {
    id : 0,
    name : "SMCI",
    hold_range : (875, 900),
    sell_for_profits : 1000  
  },
  {
    id : 1,
    name : "RDDT",
    hold_range : (35,40),
    sell_for_profits : 67.15  
  }
]


const Stocks = (stock) => (
  <ul>
    {stock.stockitems.map((item) => (
      <li key = {item.id}>
        <h2>{item.name}</h2>
        <p>{item.hold_range}</p>
        <span>{item.sell_for_profits}</span>
      </li>
    ))}
  </ul>
)
const App = () => (
  <>
  <Stocks stockitems = {stockdata}/>
  </>
)

// root.render(<App/>);

// function App() {
//   return (
//     <div className="App">
//       
//     </div>
//   );
// }

export default App;