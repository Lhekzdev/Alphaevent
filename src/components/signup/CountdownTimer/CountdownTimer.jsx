import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialTime = 1 }) => { 
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop countdown at 0

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

   // Convert seconds to MM:SS format
   const minutes = Math.floor(timeLeft / 60);
   const seconds = timeLeft % 60;

  return <span> 
     (
    <span>
      {String(minutes).padStart(2, "0")}:
      {String(seconds).padStart(2, "0")}
    </span>
  )</span>; // Ensure the time is displayed
};

export default CountdownTimer;
