import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate email and password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      
      setError("Invalid email format");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      // Fetch user data from db.json
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();

      // Check if the entered credentials match
      const user = users.find((user) => user.email === email && user.password === password);

      if (user) {

        setError("");
        alert("Login Successful");

        // Navigate to home page with user's name
        navigate("/home");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Failed to connect to the server");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(to right, #e0f7fa, #80deea)", // Soft gradient background
      }}
    >
      <div
        className="p-4"
        style={{
          width: "100%",
          maxWidth: "400px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff", // White background for the form container
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#00796b" }}>Login</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                borderRadius: "8px",
                padding: "10px",
                borderColor: "#00796b",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                borderRadius: "8px",
                padding: "10px",
                borderColor: "#00796b",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Form.Group>

          <div className="d-flex justify-content-center mt-4">
            <Button
              variant="primary"
              type="submit"
              className="me-2"
              style={{
                backgroundColor: "#00796b", // Green color for the button
                borderColor: "#00796b",
                borderRadius: "25px",
                padding: "10px 20px",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#004d40")} // Darker on hover
              onMouseOut={(e) => (e.target.style.backgroundColor = "#00796b")} // Back to original color
            >
              Login
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigate("/signup")}
              style={{
                borderRadius: "25px",
                padding: "10px 20px",
                backgroundColor: "#eeeeee",
                borderColor: "#00796b",
                color: "#00796b",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#b2dfdb")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#eeeeee")}
            >
              Signup
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;