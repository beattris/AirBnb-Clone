import star from "../images/Star 1.png";
import cardImage from "../images/image 12.png";

const Card = () => {
  return (
    <section className="experiences">
      <div className="card">
        <img src={cardImage} className="card--image" alt="card" />
        <div className="card--stats">
          <img src={star} className="card--star" alt="star" style={{ marginRight: "5px"}} />
          <span style={{ marginRight: "5px"}}>5.0</span>
          <span className="gray" style={{ marginRight: "5px"}}>(6) &#8226;</span>
          <span className="gray">USA</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p>
          <span className="bold">From $136</span> / person
        </p>
      </div>
    </section>
  );
};

export default Card;
