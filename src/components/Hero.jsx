import heroImage from "../images/Group 77.png";

const Hero = () => {
  return (
    <section className="hero">
        <img src={heroImage} alt="hero" />
        <div>
        <h2>Online Experiences</h2>
        <p className="hero-text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
        </div>
    </section>
  );
};

export default Hero;
