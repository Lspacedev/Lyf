import { IoMdArrowForward } from "react-icons/io";

function Plan(props) {
  return (
    <div className={`Plan ${props.color}`}>
      <div className="category">{props.category}</div>
      <div className="heading">{props.heading}</div>
      <div className="info">{props.info}</div>
      <div className="line"></div>
      <div className="year">{props.year}</div>
      <div className="percent">
        <div>{props.percent}</div>
        <div className="arrow">
          <IoMdArrowForward style={{ fontSize: "1.6rem" }} />
        </div>
      </div>
    </div>
  );
}

export default Plan;
