import React, { useState } from "react";
import "./styles.css";

var emojiList = {
  "😅": " Grinning Face with Sweat",
  "😂": "Face with Tears of Joy",
  "🤣": "Rolling on the Floor Laughing",
  "🙂": "This is Fine",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "🥰": "I'm in Love",
  "😘": "Face Blowing a Kiss",
  "🤪": "Zany Face"
};

export default function App() {
  const [input, setInput] = useState("");
  const [meaning, setMeaning] = useState("");
  const [isSet, set] = useState(false);

  function inputHandler(event) {
    var newInput = event.target.value;
    setInput(newInput);
    set(true);
    var newMeaning = emojiList[newInput];
    setMeaning(newMeaning);
    //console.log(input);
  }
  function clickHandler(item) {
    var newMeaning = emojiList[item];

    setMeaning(newMeaning);
    set(true);
    //console.log(meaning);
  }

  function getMeaning() {
    if (isSet === true) {
      return meaning;
    }
    return "";
  }
  return (
    <div className="App">
      <div className="darkLine"></div>
      <h1>EMOJI-PRETER</h1>
      <div className="darkLine"></div>
      <input onChange={inputHandler} style={{ marginTop: "2rem" }} />
      <div id="outputDiv">{getMeaning()}</div>
      <div id="emojiContainer">
        <ul id="emojiList" style={{ listStyleType: "none" }}>
          {Object.keys(emojiList).map((item) => {
            return (
              <li
                onClick={() => clickHandler(item)}
                key={item}
                style={{ display: "inline" }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <footer>
        <p>I'd Love To Connect</p>
        <ul id="footerList">
          <li>
            <a href="https://github.com/Akshita-Saini">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/akshita-saini-0782a61a1/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://twitter.com/akshitasaini15?lang=en">Twitter</a>
          </li>
        </ul>
        <div>
          <p>
            Created by Akshita &copy;
            <br></br>
            Visit Portfolio at{" "}
            <a href="https://akshita-saini.netlify.app/">
              akshita-saini.netlify.app
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
