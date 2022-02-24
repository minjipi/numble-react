import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Item from "./Item";

function TestMain() {
  const [stage, setStage] = useState(1);
  const [boxSize, setBoxSize] = useState(170);

  const num = Math.round((stage + 0.5) / 2) + 1;
  const total = Math.pow(Math.round((stage + 0.5) / 2) + 1, 2);
  // 사각형 총갯수

  const target = Math.floor(Math.random() * total);

  const arr = Array.from({ length: total }, () => 0);

  const r = [Math.floor(Math.random() * (256 - 1) + 1)];
  const g = [Math.floor(Math.random() * (256 - 1) + 1)];
  const b = [Math.floor(Math.random() * (256 - 1) + 1)];

  const difColor = [
    r - Math.floor(Math.random() * (200 / stage - 10) + 10),
    g - Math.floor(Math.random() * (200 / stage - 10) + 10),
    b - Math.floor(Math.random() * (200 / stage - 10) + 10),
  ];

  console.log("test");
  console.log("rgb: " + r, g, b);
  // console.log("difColor: " + difColor);

  return (
    <>
      스테이지: {stage}
      <br />
      <Item stage={stage} />
      <br />
      {arr.map((item, index) =>
        index === target ? (
          (index + 1) % num === 0 ? (
            <>
              <Box
                color={difColor}
                boxSize={boxSize - stage}
                onClick={() => {
                  setStage(stage + 1);
                }}
              />

              <br />
            </>
          ) : (
            <>
              <Box
                color={difColor}
                boxSize={boxSize - stage}
                onClick={() => {
                  setStage(stage + 1);
                }}
              />
            </>
          )
        ) : (index + 1) % num === 0 ? (
          <>
            <Box
              color={[r, g, b]}
              boxSize={boxSize - Math.floor(0.9 * stage)}
            />
            <br />
          </>
        ) : (
          <Box color={[r, g, b]} boxSize={boxSize - stage} />
        )
      )}
    </>
  );
}

const Box = styled.div`
  display: inline-block;
  width: ${(props) => props.boxSize + "px"};
  height: ${(props) => props.boxSize + "px"};
  margin: 5px;
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
