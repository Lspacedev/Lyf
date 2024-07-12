import Intro from "./intro";
import Email from "./email";
import Plan from "./plan";

function Main() {
  let plansData = [
    {
      color: "lime",
      category: "STRATEGY",
      heading: "Money Momentum",
      info: "Tract Premium helps you start saver investments insights covering.",
      year: "3 yrs CAGR",
      percent: "7.20%",
    },
    {
      color: "black",
      category: "PLANS",
      heading: "Long-Term",
      info: "Create a vision. To get started, imagine your dream life.",
      year: "25 yrs CAGR",
      percent: "14.20%",
    },
    {
      color: "violet",
      category: "STRATEGY",
      heading: "Focussed",
      info: "Be focused Life planning, however, can serve as a roadmap or guide.",
      year: "1 yrs CAGR",
      percent: "11.20%",
    },
    {
      color: "yellow",
      category: "PLANS",
      heading: "Fixed Income",
      info: "Get multiple benefits, and lumpsum option & Guaranteed Returns",
      year: "5 yrs CAGR",
      percent: "8.20%",
    },
  ];
  return (
    <div className="Main">
      <div className="intro-div">
        <Intro />
        <Email />
      </div>
      <div className="featured-plans">
        <div className="featured-headings">
          <h2>Featured Plans</h2>
          <div>Explore All</div>
        </div>
        <div className="plans">
          {plansData.map((plan) => (
            <Plan
              color={plan.color}
              category={plan.category}
              heading={plan.heading}
              info={plan.info}
              year={plan.year}
              percent={plan.percent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
