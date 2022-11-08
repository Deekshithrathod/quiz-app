import React from "react";

export default function HomeScreen(props) {
  function handleClick() {
    props.toggleScreen();
  }
  return (
    <div className="home-screen">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button onClick={handleClick}>Start Quiz</button>
    </div>
  );
}
