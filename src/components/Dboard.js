import React from "react";
import { Navigate } from "react-router-dom";
import profileImg from "../assets/images/profile-img.png";
import "./Dashboard.css";
import { Row, Col } from "react-bootstrap";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <Navigate to="/login" />;

  return (
    <div className="dashboard-container bg-primary-subtle">
      <Row className="welcome-banner">
        <Col xs={7}>
          <div className="text-primary p-3">
            <h5 className="text-primary">
              Hey, {user.user_firstname} {user.user_lastname}!
            </h5>
            <p>Greetings from Syoft</p>
          </div>
        </Col>
        <Col xs={5} className="align-self-end">
          <img src={profileImg} alt="Profile" className="img-fluid" />
        </Col>
      </Row>
      <p className="details"> Please Check Your Details :</p>
      <div className="dashboard-card">
        <div className="user-details">
          <p>
            <strong> Your Name :</strong> {user.user_firstname}{" "}
            {user.user_lastname}
          </p>
          <p>
            <strong> Your Email :</strong> {user.user_email}
          </p>
          <p>
            <strong> Your Phone :</strong> {user.user_phone}
          </p>
        </div>
        <hr />
        <div className="about-us">
          <h3>About Us</h3>
          <p>
            We are believers of change! A change driven by technology and
            innovation. We help businesses and individuals in adapting as well
            as adopting digital transformation.!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
