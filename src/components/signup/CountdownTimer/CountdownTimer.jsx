import React, { useEffect, useState } from "react";

const CountdownTimer = ({ totalSeconds = 150 }) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const storedTime = localStorage.getItem("otpStartTime");
    if (!storedTime) return totalSeconds;

    const elapsed = Math.floor((Date.now() - Number(storedTime)) / 1000);
    return Math.max(totalSeconds - elapsed, 0); // Ensure time doesn't go negative
  });

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0)); // Ensure time doesn't go negative
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <span>
      (
      <strong>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </strong>
      )
    </span>
  );
};

export default CountdownTimer;
