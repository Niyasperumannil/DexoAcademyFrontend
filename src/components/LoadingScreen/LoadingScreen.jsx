import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            navigate("/home", { replace: true });
          }, 100); // small delay before redirect
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <img src="/dexologoo.png" alt="Logo" className="loading-logo" />
        <h1 className="loading-title">
          DEXO <span>ACADEMY</span>
        </h1>
        <div className="loading-bar">
          <div
            className="loading-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
