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
      <h1>EMOJI-PRETER</h1>
      <input onChange={inputHandler} />
      <div>{getMeaning()}</div>
      <ul style={{ listStyleType: "none" }}>
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
  );
}
