import "./App.css";
import Picture from "./components/Picture";
import PropertyInfo from "./components/PropertyInfo";
import ToggleSwitch from "./components/ToggleSwitch";

const propertyInfo = [
  {
    price: 195000,
    bed: 3,
    bath: 1,
    sqft: 1568,
    "sqft-lot": 7000,
    address: "3051 Saint Daphne Dr, Saint Charles, MO 63301",
    photoUrl:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
];

function App() {
  return (
    <div className="app">
      <h1>Real Estate</h1>
      <div className="info-container">
        <ToggleSwitch />
        <Picture photoUrl={propertyInfo[0].photoUrl}></Picture>
        <PropertyInfo propertyInfo={propertyInfo}></PropertyInfo>
      </div>
    </div>
  );
}

export default App;
