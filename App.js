import React from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import HomeScreen from "./components/HomeScreen";

export default function App() {
  const [isStarted, setIsStarted] = React.useState(false);
  function toggleScreen() {
    console.log("button clicked");
    setIsStarted((prevState) => !prevState);
  }
  return (
    <div>
      {/* <p>THis is a app</p> */}
      {!isStarted && <HomeScreen toggleScreen={toggleScreen} />}
    </div>
  );
}
