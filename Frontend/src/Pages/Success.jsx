import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Success = () => {
  const [countdown, setcountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutid = setInterval(() => {
      setcountdown((prevcount) => {
        if (prevcount === 1) {
          clearInterval(timeoutid);
          navigate("/");
        }
        return prevcount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutid);
  }, [navigate]);
  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/sandwich.png" alt="success" />
          <h1>Redirecting to home in {countdown} seconds...</h1>
          <Link to={"/"}>
            Back to Home <HiOutlineArrowNarrowRight />{" "}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Success;
