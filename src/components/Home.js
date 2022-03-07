import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/components/Home.css";
import TwitterIcon from "./social/TwitterIcon";
import GitHubIcon from "./social/GitHubIcon";
import LinkedinIcon from "./social/LinkedinIcon";
import TreehouseIcon from "./social/TreehouseIcon";
import memoji from "../img/memoji_sticker.png";
const Home = () => {
  const sentenceRef = useRef();

  useEffect(() => {
    const sentences = [
      "Full Stack JavaScript",
      "React",
      "Express",
      "Node.js",
      "REST API",
      "SQL",
      "HTML",
      "CSS",
    ];
    let i = 0;
    let timer;

    function typingEffect() {
      let sentence = sentences[i].split("");

      const loopTyping = () => {
        if (sentence.length > 0) {
          sentenceRef.current.innerHTML += sentence.shift();
        } else {
          timer = setTimeout(deletingEffect, 1000);
          return false;
        }
        timer = setTimeout(loopTyping, 50);
      };
      loopTyping();
    }

    const deletingEffect = () => {
      let sentence = sentences[i].split("");
      const loopDeleting = () => {
        if (sentence.length > 0) {
          sentence.pop();
          sentenceRef.current.innerHTML = sentence.join("");
        } else {
          if (sentences.length > i + 1) {
            i++;
          } else {
            i = 0;
          }
          typingEffect();
          return false;
        }
        timer = setTimeout(loopDeleting, 70);
      };
      loopDeleting();
    };

    typingEffect();

    return function cleanup() {
      console.log("cleaning up");
      clearTimeout(timer);
    };
  }, []);

  return (
    <main>
      <div id="left">
        <h1 id="name">
          Ahmad
          <br />
          Ibrahim
        </h1>
        <h2 id="position">Software Developer</h2>
        <div className="wrapper">
          <p ref={sentenceRef} className="typing"></p>
          <p className="typing blink">|</p>
        </div>
        <Link to="/" className="button">
          View My Work
        </Link>
      </div>
      <div id="right">
        <img src={memoji} alt="Ahmad's memoji sticker" />
      </div>
      <div id="social">
        <TwitterIcon />
        <LinkedinIcon />
        <GitHubIcon />
        <TreehouseIcon />
      </div>
      <svg id="circle">
        <circle cx="25" cy="75" r="20" />
      </svg>
      <svg id="circle2">
        <circle cx="25" cy="75" r="20" />
      </svg>{" "}
      <svg id="circle3">
        <circle cx="25" cy="75" r="20" />
      </svg>
    </main>
  );
};

export default Home;
