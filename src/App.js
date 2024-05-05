import './App.css';
import PropertyList from "./components/PropertyList";

function App() {
    const myProperties = ["Квартира 1", "Квартира 2", "Дом 1", "Дом 2"];

  return (
    <PropertyList properties={myProperties} />
  );
}

export default App;
