function Plan(props) {
  return (
    <div className={`Plan ${props.color}`}>
      <div className="category">{props.category}</div>
      <div className="heading">{props.heading}</div>
      <div className="info">{props.info}</div>
      <hr></hr>
      <div className="year">{props.year}</div>
      <div className="percent">{props.percent}</div>
    </div>
  );
}

export default Plan;
