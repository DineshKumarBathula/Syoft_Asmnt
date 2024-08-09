import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    user_firstname: "",
    user_lastname: "",
    user_email: "",
    user_password: "",
    user_phone: "",
    user_city: "",
    user_zipcode: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://syoft.dev/Api/user_registeration/api/user_registeration",
        formData
      );
      console.log(response);

      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data.user_data));
        navigate("/login");
      } else {
        setError(
          response.data.message || "Failed to register. Please try again."
        );
      }
    } catch (error) {
      console.error(
        "Sign up error:",
        error.response ? error.response.data : error.message
      );
      setError("An error occurred while registering. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h2>Welcome to our community</h2>
        <p>
          Fuse helps developers to build organized and well-coded dashboards
          full of beautiful and rich modules. Join us and start building your
          application today.
        </p>
        <p>
          <span className="images">
            <div className="images">
              <img
                src="https://img.freepik.com/free-photo/young-fashion-smiling-hipster-man-city-cafe-lunch-time-with-notebook-suit-looking-watches_158538-8018.jpg?t=st=1723199671~exp=1723203271~hmac=3a97452b30fa01a4764adc1e7d33eea71f1a4d901c3047b0b38f038d59b848f3&w=1380"
                alt="User 1"
              />
              <img
                src="https://img.freepik.com/free-photo/confident-professional_1098-15322.jpg?t=st=1723200355~exp=1723203955~hmac=92a907130b599cd347abb97ff762ced3a30d94639d4c729538684db326b0a075&w=1380"
                alt="User 1"
              />
              <img
                src="https://img.freepik.com/free-photo/young-fashion-smiling-hipster-man-city-cafe-lunch-time-with-notebook-suit-looking-watches_158538-8018.jpg?t=st=1723199671~exp=1723203271~hmac=3a97452b30fa01a4764adc1e7d33eea71f1a4d901c3047b0b38f038d59b848f3&w=1380"
                alt="User 1"
              />
              <img
                src="https://img.freepik.com/free-photo/confident-professional_1098-15322.jpg?t=st=1723200355~exp=1723203955~hmac=92a907130b599cd347abb97ff762ced3a30d94639d4c729538684db326b0a075&w=1380"
                alt="User 1"
              />
            </div>
          </span>
          More than 17k people joined us, it's your turn
        </p>
      </div>
      <div className="signup-right">
        <form onSubmit={handleSubmit}>
          <h2>Sign up</h2>
          <p className="para">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
          <div>
            <label>Full name *</label>
            <input
              type="text"
              name="user_firstname"
              value={formData.user_firstname}
              onChange={handleChange}
              required
            />

            <label>Last name *</label>
            <input
              type="text"
              name="user_lastname"
              value={formData.user_lastname}
              onChange={handleChange}
              required
            />

            <label>Email address *</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />

            <label>Password *</label>
            <input
              type="password"
              name="user_password"
              value={formData.user_password}
              onChange={handleChange}
              required
            />

            <label>Phone *</label>
            <input
              type="tel"
              name="user_phone"
              value={formData.user_phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="checkbox-container">
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms">
              I agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Create your free account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
