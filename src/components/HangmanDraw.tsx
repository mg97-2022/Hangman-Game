import React from "react";

const head = (
  <div
  key='head'
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);
const body = (
  <div
  key='body'
    style={{
      width: "10px",
      height: "150px",
      backgroundColor: "black",
      position: "absolute",
      top: "120px",
      right: "0",
    }}
  />
);
const rightHand = (
  <div
  key='rightHand'
    style={{
      width: "10px",
      height: "80px",
      backgroundColor: "black",
      position: "absolute",
      top: "100px",
      right: "0",
      rotate: "45deg",
      transformOrigin: "bottom right",
    }}
  />
);
const leftHand = (
  <div
  key='leftHand'
    style={{
      width: "10px",
      height: "80px",
      backgroundColor: "black",
      position: "absolute",
      top: "100px",
      right: "0",
      rotate: "-45deg",
      transformOrigin: "bottom left",
    }}
  />
);
const rightLeg = (
  <div
  key='rightLeg'
    style={{
      width: "10px",
      height: "80px",
      backgroundColor: "black",
      position: "absolute",
      top: "185px",
      right: "10px",
      rotate: "135deg",
      transformOrigin: "bottom right",
    }}
  />
);
const leftLeg = (
  <div
  key='leftLeg'
    style={{
      width: "10px",
      height: "80px",
      backgroundColor: "black",
      position: "absolute",
      top: "185px",
      right: "-10px",
      rotate: "-135deg",
      transformOrigin: "bottom left",
    }}
  />
);

const WholeBody = [head, body, rightHand, leftHand, rightLeg, leftLeg];

type hangmanDrawProps = {
  incorrectLettersNumber: number;
};

const HangmanDraw = ({ incorrectLettersNumber }: hangmanDrawProps) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {WholeBody.slice(0, incorrectLettersNumber)}
      <div
        style={{
          width: "10px",
          height: "50px",
          backgroundColor: "black",
          marginLeft: "120px",
          position: "absolute",
          top: "0",
          right: "0",
        }}
      />
      <div
        style={{
          width: "200px",
          height: "10px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          width: "10px",
          height: "400px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          width: "250px",
          height: "10px",
          backgroundColor: "black",
        }}
      />
    </div>
  );
};

export default HangmanDraw;
