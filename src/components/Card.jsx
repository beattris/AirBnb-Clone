import star from "../images/Star 1.png";

const Card = (props) => {
  return (
      <div className="card">
        {props.dataDetail.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
        {props.dataDetail.openSpots >= 1 && props.dataDetail.location === "Online" && <div className="card--badge">ONLINE</div>}
        <img src={require(`../images/${props.dataDetail.coverImg}`)} className="card--image" alt="card" />
        <div className="card--stats">
          <img src={star} className="card--star" alt="star" style={{ marginRight: "5px"}} />
          <span style={{ marginRight: "5px"}}>{props.dataDetail.stats.rating}</span>
          <span className="gray" style={{ marginRight: "5px"}}>({props.dataDetail.stats.reviewCount}) &#8226;</span>
          <span className="gray">{props.dataDetail.location}</span>
        </div>
        <p className="card--title">{props.dataDetail.title}</p>
        <p className="card--price">
          <span className="bold">From ${props.dataDetail.price}</span> / person
        </p>
      </div>
  );
};

export default Card;
