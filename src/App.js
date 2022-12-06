import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";

function App() {
  const experienceCards = data.map((dataDetail) => {
    return (
      <Card
        key={dataDetail.id}
        img={dataDetail.coverImg}
        rating={dataDetail.stats.rating}
        reviewCount={dataDetail.stats.reviewCount}
        location={dataDetail.location}
        title={dataDetail.title}
        price={dataDetail.price}
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
