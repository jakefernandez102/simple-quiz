import React, {useEffect, useState} from 'react'

interface TimerProps {
  duration: number; 
  onComplete: () => void;
}

const Timer: React.FC<TimerProps> = ({ duration, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const radius = 50; // Radius of the circle
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

  const progress = (timeLeft / duration) * circumference;

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      onComplete();
    }
  }, [timeLeft, onComplete]);

  return (
    <div className="timer-container">

      <div style={{ position: 'relative', width: '120px', height: '120px' }}>
        <svg width="120" height="120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#91cbb9"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#053834"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 1s linear',
            }}
          />
        </svg>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          {timeLeft}
        </div>
      </div>
    </div>
  );
};

export default Timer