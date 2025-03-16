import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [phone, setphone] = useState(0);
  const navigate = useNavigate();

  const handlereservation = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        "https://foodieheaven.onrender.com/api/v1/reservation/send",
        {
          firstname,
          lastname,
          email,
          date,
          time,
          phone,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setfirstName("");
      setlastname("");
      setemail("");
      setdate("");
      settime("");
      setphone(0);
      navigate("/success");
    } catch (error) {
        console.log(error);
        
        toast.error(error.response?.data?.message || error.message);

    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form action="">
              <div>
                <input
                  type="text"
                  placeholder="Enter your firstName"
                  value={firstname}
                  onChange={(e) => {
                    setfirstName(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Enter your lastname"
                  value={lastname}
                  onChange={(e) => {
                    setlastname(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => {
                    setdate(e.target.value);
                  }}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => {
                    settime(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
                <input
                  type="number"
                  placeholder="Enter your number"
                  value={phone}
                  onChange={(e) => {
                    setphone(e.target.value);
                  }}
                />
              </div>
              <button type="submit" onClick={handlereservation}>
                RESERVE NOW{" "}
                <span>
                  {" "}
                  <HiOutlineArrowNarrowRight />{" "}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
