import React, { useState, useEffect, useMemo } from "react";

function Item(props) {
  const [sec, setSec] = useState(5);

  useEffect(() => {
    setSec(5);
  }, [props]);

  useEffect(() => {
    let timer;

    timer = setInterval(() => {
      if (sec > 0) {
        setSec(sec - 0.1);
      }
      if (sec === 0) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [sec]);

  return (
    <>
      남은시간: {sec}
      <br />
    </>
  );
}

export default Item;