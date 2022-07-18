import "./App.css";
import locations from "./data.js";
//components
import Navbar from "./components/Navbar/Navbar.js";
import Card from "./components/Card/Card.js";

function App() {
  const cards = locations.map((location) => {
    return <Card {...location} />;
  });

  return (
    <div className="app">
      <Navbar />
      <section className="card__list">{cards}</section>
    </div>
  );
}

export default App;
