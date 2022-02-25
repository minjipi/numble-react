import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Item from "./Item";

function TestMain() {
  const [stage, setStage] = useState(1);
  const [boxSize, setBoxSize] = useState(170);
  const [score, setScore] = useState(0);

  const minRef = useRef({});

  const num = Math.round((stage + 0.5) / 2) + 1;
  const total = Math.pow(num, 2);
  // 사각형 총갯수

  const target = Math.floor(Math.random() * total);

  const arr = Array.from({ length: total }, () => 0);

  const r = [Math.floor(Math.random() * (256 - 1) + 1)];
  const g = [Math.floor(Math.random() * (256 - 1) + 1)];
  const b = [Math.floor(Math.random() * (256 - 1) + 1)];

  const difColor = [
    //                                 최댓값    - 최소값
    r - Math.floor(Math.random() * (200 / stage - (stage + 10) / (stage + 10))),
    g - Math.floor(Math.random() * (200 / stage - (stage + 10) / (stage + 10))),
    b - Math.floor(Math.random() * (200 / stage - (stage + 10) / (stage + 10))),
  ];

  //console.log("rgb: " + r, g, b);
  //console.log("difColor: " + difColor);

  useEffect(() => {
    setBoxSize((350 - num * 5) / num);
  }, [num]);

  return (
    <>
      스테이지: {stage}
      <br />
      <Item stage={stage} minRef={minRef} />
      <br />
      {arr.map((item, index) =>
        index === target ? (
          (index + 1) % num === 0 ? (
            <>
              <Box
                color={difColor}
                boxSize={boxSize}
                onClick={() => {
                  // console.log("now num: " + num);

                  console.log("boxSize" + boxSize);
                  setStage(stage + 1);
                }}
              />
              <br />
            </>
          ) : (
            <>
              <Box
                color={difColor}
                boxSize={boxSize}
                onClick={() => {
                  // console.log("now num: " + num);
                  setStage(stage + 1);
                  // console.log("boxSize: " + boxSize);
                }}
              />
            </>
          )
        ) : (index + 1) % num === 0 ? (
          <>
            <Box
              color={[r, g, b]}
              boxSize={boxSize}
              onClick={() => {
                minRef.current.minusSec();
              }}
            />

            <br />
          </>
        ) : (
          <Box
            color={[r, g, b]}
            boxSize={boxSize}
            onClick={() => {
              minRef.current.minusSec();
            }}
          />
        )
      )}
    </>
  );
}

const Box = styled.div`
  display: inline-block;
  width: ${(props) => props.boxSize + "px"};
  height: ${(props) => props.boxSize + "px"};
  margin-left: 5px;
  background-color: ${(props) =>
    "RGB(" +
    props.color[0] +
    "," +
    props.color[1] +
    "," +
    props.color[2] +
    ")"};
`;
export default TestMain;
