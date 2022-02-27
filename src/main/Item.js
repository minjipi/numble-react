import React, { useState, useEffect, useImperativeHandle } from "react";

function Item(props) {
  const [sec, setSec] = useState(15);
  const [score, setScore] = useState(0);
  // useEffect(() => {
  //   setSec(5);
  // }, [props]);

  useImperativeHandle(props.minRef, () => ({
    minusSec() {
      if (sec > 5) {
        setSec(sec - 5);
      } else {
        setSec(0);
      }
    },

    clickAnswer() {
      setSec(sec + 5);
      console.log("clickAnswer");
    },

    // 점수부여
    score() {
      setScore(score + Math.pow(props.stage, 3) * sec);
      console.log("남은 시간은: " + sec + ". score ++");
      console.log("남은 점수는: " + score);
    },
  }));

  useEffect(() => {
    let timer;

    timer = setInterval(() => {
      if (sec > 0) {
        setSec(sec - 0.1);
      }
      if (sec === 0) {
        alert(
          "GAME OVER! " +
            "스테이지: " +
            props.stage +
            ", 점수: " +
            score.toFixed(0)
        );

        clearInterval(timer);
        window.location.replace("/testmain");
      }
    }, 100);
    return () => clearInterval(timer);
  }, [sec]);

  return (
    <>
      남은시간: {sec.toFixed(1)}
      <br />
      점수: {score.toFixed(0)}
      <br />
    </>
  );
}

export default Item;
