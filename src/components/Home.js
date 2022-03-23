import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/components/Home.css";
import TwitterIcon from "./icons/TwitterIcon";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import TreehouseIcon from "./icons/TreehouseIcon";
import me from "../img/HomePageMe.png";
const Home = () => {
  const sentenceRef = useRef();

  useEffect(() => {
    const sentences = [
      "Full Stack JavaScript",
      "React",
      "Express",
      "Node.js",
      "GIT",
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
    <main className="home">
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
        <Link to="/projects" className="button featured">
          View My Work
        </Link>
      </div>
      <div id="right">
        <img src={me} alt="Ahmad's memoji sticker" />
      </div>
      <div id="social">
        <TwitterIcon />
        <LinkedinIcon />
        <GitHubIcon />
        <TreehouseIcon />
      </div>
    </main>
  );
};

export default Home;
