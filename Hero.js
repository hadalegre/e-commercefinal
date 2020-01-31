import React from "react";

export default function Hero({ children }) {
  return (
    <div>
      <div className="hero">
        <div className="banner">
          <h2>Your pets deserve the best too.</h2>
          <p>Pamper your pets with comfort and style.</p>
          {children}
        </div>
      </div>
    </div>
  );
}
