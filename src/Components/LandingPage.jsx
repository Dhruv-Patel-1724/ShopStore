import React from "react";
import "../assets/styles/landingpage.css";
import "../assets/styles/landingpage.css";
import s from "../assets/image/s.jpg";
import w from "../assets/image/w.jpg";
import d from "../assets/image/d.jpg";
import c from "../assets/image/c.jpg";
import bg from "../assets/image/shop1.png";

const LandingPage = () => {
  return (
    <div className="landing">
      <section className="hero">
        <img src={bg} alt="hero-bg" className="hero-bg" />
        <h1>
          The Best Platform for <br /> Online Shopping
        </h1>
        <p>Explore a wide range of products at the best prices</p>

        <div className="hero__mock">
          <div className="mock">
            {/* <button className="btn primary small">Buy Now</button> */}
            <button className="btn primary small">Buy Now</button>
          </div>
        </div>
        {/* <div className="hero__actions rr">
          <button className="btn primary">Start Shopping</button>
          <button className="btn light">View Demo</button>
        </div> */}
      </section>

      <section className="products">
        <h2>Featured Products</h2>
        <p className="sub">Top deals for you</p>

        <div className="grid">
          <div className="card">
            <img src={c} alt="Cloths" />
            <h3>Cloths</h3>
            <span>59xx</span>
          </div>

          <div className="card">
            <img src={w} alt="Smart Watch" />
            <h3>Smart Watch</h3>
            <span>149xxx</span>
          </div>

          <div className="card">
            <img src={s} alt="Sport Sneakers" />
            <h3>Sport Sneakers</h3>
            <span>25xxx</span>
          </div>

          <div className="card">
            <div className="img-wrap hot">
              <img src={d} alt="DSLR Camera" />
            </div>
            <h3>DSLR Camera</h3>
            <span>49xxx</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
