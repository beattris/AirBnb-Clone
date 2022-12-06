import heroImage from "../images/Group 77.png";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-img">
        <img src={heroImage} alt="hero" />
      </div>
      <div className="hero-text">
        <h2>Online Experiences</h2>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default Hero;
