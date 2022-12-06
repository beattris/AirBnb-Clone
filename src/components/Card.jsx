import star from "../images/Star 1.png";
// import katie from "../images/katie-zaferes.png";

const Card = (props) => {
  return (
    <section className="experiences">
      <div className="card">
        <img src={require(`../images/${props.img}`)} className="card--image" alt="card" />
        <div className="card--stats">
          <img src={star} className="card--star" alt="star" style={{ marginRight: "5px"}} />
          <span style={{ marginRight: "5px"}}>{props.rating}</span>
          <span className="gray" style={{ marginRight: "5px"}}>({props.reviewCount}) &#8226;</span>
          <span className="gray">{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p>
          <span className="bold">From ${props.price}</span> / person
        </p>
      </div>
    </section>
  );
};

export default Card;
