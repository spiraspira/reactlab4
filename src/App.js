import './App.css';
import PropertyList from "./components/PropertyList";
import Header from "./components/Header";
import GreetingsSection from "./components/GreetingsSection";

function App() {
    const myProperties = ["Квартира 1", "Квартира 2", "Дом 1", "Дом 2"];

  return (
    <div>
        <Header />
        <GreetingsSection />
        <PropertyList properties={myProperties} />
    </div>
  );
}

export default App;
