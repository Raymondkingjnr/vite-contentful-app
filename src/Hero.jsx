import React from "react";
import heroImg from "./assets/hero.svg";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            dignissimos quos omnis quia delectus vel. Error necessitatibus
            quidem, nobis quam accusamus, dolore tenetur amet totam vel at nulla
            magni aliquid! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Perspiciatis aliquam vel illo, quod excepturi eaque.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman" className="img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
