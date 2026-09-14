import bnr from "./assets/banner-stack.png";
import "./banner.css";
function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>
          Build Your Ideal
          <br />
          <span>Development Stack</span>
        </h1>

        <p>
          Explore frontend, backend, database, and tooling options,
          <br />
          compare them side by side, and put together the stack that fits your
          <br />
          next project.
        </p>

        <div className="banner-buttons">
          <button className="explore-btn">Explore Technologies</button>
          <button className="learn-btn">Learn More</button>
        </div>
      </div>

      <div className="banner-image">
        <img src={bnr} alt="Dev Stack logo" />
      
      </div>
    </section>
  );
}

export default Banner;