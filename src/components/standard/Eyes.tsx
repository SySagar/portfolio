import React, { useEffect, useState } from "react";
import "./eyes.css";

const Eyes: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  useEffect(() => {
    const followCursor = () => {
      const container = document.getElementById("container") as HTMLElement;
      const containerRect = container.getBoundingClientRect();
      const containerCenter = {
        x: containerRect.left + containerRect.width / 2,
        y: containerRect.top + containerRect.height / 2,
      };

      const angle = Math.atan2(
        cursorPosition.y - containerCenter.y,
        cursorPosition.x - containerCenter.x
      );

      const radius =
        (Math.min(containerRect.width, containerRect.height) / 2) * 0.5;
      const eyePositionX = containerCenter.x*0.045 + radius * Math.cos(angle);
      const eyePositionY = containerCenter.y*0.045 + radius * Math.sin(angle);

      setEyePosition({
        x: eyePositionX,
        y: eyePositionY,
      });
    };

    followCursor();
  }, [cursorPosition]);

  return (
    <div id="container" className="container">
      <div
        id="eye"
        className="eye"
        style={{ top: eyePosition.y, left: eyePosition.x }}
      >
        <div style={{
          width: "1px",
          height: "2px",
          borderRadius: "100%",
          position: "relative",
          left: "35%",
          top: "35%",
          backgroundColor: "white",
        }}>

        </div>
      </div>
    </div>
  );
};

export default Eyes;
