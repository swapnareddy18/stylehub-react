import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./Navbar";

export default function Home() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/products");
  };

  const captionStyle = {
    background: "rgba(0,0,0,0.55)",
    padding: "25px",
    borderRadius: "12px",
  };

  return (
    <div style={{ marginTop: "90px" }}>
      <NavigationBar />

      <div
        style={{
          height: "100vh",
          background: "linear-gradient(to right, #fff0f5, #ffe5ec)",
        }}
      >
        <Carousel interval={900} pause={false}>

          {/* Slide 1 */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg"
              alt="beauty"
              style={{ height: "100vh", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <div style={captionStyle}>
                <h1>Welcome to StyleHub 💄</h1>
                <p>Luxury beauty & cosmetics for your perfect glow</p>
                <Button variant="light" size="lg" onClick={handleExploreClick}>
                  Explore Collection
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg"
              alt="cosmetics"
              style={{ height: "100vh", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <div style={captionStyle}>
                <h1>Feel Beautiful Everyday 🌸</h1>
                <p>Premium skincare & makeup essentials</p>
                <Button variant="light" size="lg" onClick={handleExploreClick}>
                  Shop Now
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/2693644/pexels-photo-2693644.jpeg"
              alt="skincare"
              style={{ height: "100vh", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <div style={captionStyle}>
                <h1>Glow with Confidence ✨</h1>
                <p>Trusted beauty products loved by thousands</p>
                <Button variant="light" size="lg" onClick={handleExploreClick}>
                  View Products
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>
    </div>
  );
}
