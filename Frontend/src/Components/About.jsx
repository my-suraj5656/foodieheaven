import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            velit distinctio nihil similique cupiditate iure modi quasi?
            Incidunt, iure. Voluptatum, distinctio mollitia labore laudantium
            officia culpa possimus autem ad dolore sequi architecto numquam fuga
            rem quos quaerat assumenda amet unde totam sapiente quam? Atque
            facere cum saepe incidunt ipsam reprehenderit.
          </p>
          <Link to={"/"}>Explore Menu <span>
           <HiOutlineArrowNarrowRight/> </span></Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
