import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";

function App() {
  const experienceCards = data.map((dataDetail) => {
    return (
      // using dataDetail={dataDetail} to make the Card component more lean
      <Card
        key={dataDetail.id}
        dataDetail={dataDetail}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="experiences">{experienceCards}</section>
    </div>
  );
}

export default App;
