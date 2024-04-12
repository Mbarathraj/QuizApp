import React, { useEffect, useState } from 'react';

const Timer = ({noOfQuestions}) => {
    let timer;
    let levelOfQuestion="medium";
    if (levelOfQuestion === "easy") {
      timer=Math.floor(noOfQuestions * 0.6)
    } else if (levelOfQuestion === "medium") {
      timer = Math.floor(noOfQuestions * 0.8);
    } else {
      timer = noOfQuestions * 1;
    }
  const initialTime = timer * 60;
  const [seconds, setSeconds] = useState(initialTime);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const storedTime = localStorage.getItem("timerStartTime");
    const storedSeconds = localStorage.getItem("timerSeconds");

    if (storedTime && storedSeconds) {
      const elapsedTime = Math.floor((Date.now() - parseInt(storedTime)) / 1000);
      console.log(initialTime-elapsedTime)
      const remainingTime = initialTime - elapsedTime;

      if (remainingTime <= 0) {
        setSeconds(0);
      } else {
        setSeconds(remainingTime);
      }
    } else {
      localStorage.setItem("timerStartTime", Date.now());
      localStorage.setItem("timerSeconds", initialTime);
    }
  }, [initialTime]);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds <= 1) {
            setIsActive(false);
            alert("test has been submitted")
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    if (!isActive) {
      localStorage.removeItem("timerStartTime");
      localStorage.removeItem("timerSeconds");
    } else {
      localStorage.setItem("timerSeconds", seconds);
    }
  }, [seconds, isActive]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes<10 ? '0'+minutes:minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className='timer'>{formatTime(seconds)}</div>
  );
}

export default Timer;
