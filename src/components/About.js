import { useEffect, useRef, useState } from "react";
import "../css/components/About.css";
import RightArrowIcon from "./icons/RightArrowIcon";
import LeftArrowIcon from "./icons/LeftArrowIcon";
// import me from "../img/aboutme.png";
import me from "../img/AboutMe_new.png";
import me1 from "../img/me1.png";
import me2 from "../img/me2.png";
import me3 from "../img/me3.png";
import me4 from "../img/me4.png";
import me5 from "../img/me5.png";
import me6 from "../img/me6.png";
import me7 from "../img/me7.png";
import { Link } from "react-router-dom";

const About = () => {
  const [offset, setOffset] = useState(0);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const imagesArray = [
    [me1, "Pismo Beach, California"],
    [me2, "Saddledome, Calgary"],
    [me3, "Banff, Alberta"],
    [me4, "Lake Louise, Alberta"],
    [me5, "Maui, Hawaii"],
    [me6, "Willis Tower, Chicago"],
    [me7, "Comerica Park, Detroit"],
  ];
  const max = imagesArray.length;
  useEffect(() => {
    setImages([
      <li key="0">
        <img
          src={imagesArray[(0 + offset) % max][0]}
          alt="A picture of Ahmad Ibrahim"
        />
        <span>{imagesArray[(0 + offset) % max][1]}</span>
      </li>,
      <li key="1">
        <img
          src={imagesArray[(1 + offset) % max][0]}
          alt="A picture of Ahmad Ibrahim"
        />
        <span>{imagesArray[(1 + offset) % max][1]}</span>
      </li>,

      <li key="2">
        <img
          src={imagesArray[(2 + offset) % max][0]}
          alt="A picture of Ahmad Ibrahim"
        />
        <span>{imagesArray[(2 + offset) % max][1]}</span>
      </li>,
      <li key="3">
        <img
          src={imagesArray[(3 + offset) % max][0]}
          alt="A picture of Ahmad Ibrahim"
        />
        <span>{imagesArray[(3 + offset) % max][1]}</span>
      </li>,
    ]);
  }, [offset]);

  const shiftLeft = () => {
    setOffset((prevState) => {
      if (prevState === 0) {
        return max - 1;
      }
      return (prevState - 1) % max;
    });
  };
  const shiftRight = () => {
    setOffset((prevState) => {
      return (prevState + 1) % max;
    });
  };
  return (
    <main className="about">
      <div className="top">
        <div className="left">
          <h1>About Me</h1>
          <h2>
            Full Stack JavaScript Developer
            <br /> from Fresno, California.
          </h2>
          <p>
            From a young age I was drawn to technology. At the age of 7 I laid
            my eyes on my family's first computer. No internet access yet but I
            spent a lot of time on Microsoft Paint. I was lucky enough to go to
            an Elementary school with a computer lab full of Mackintoshes. There
            I would play my first computer game The Oregon Trail. Middle school
            and highschool offered me courses in typing and the basics of
            Microsoft Office. Later in life, while working at an automotive
            dealership, I would post ads on craigslist. It was there that I fell
            upon something special. Craigslist offered template customization
            using basic HTML tags. I absolutely loved it! Though I was still
            clueless, I knew there had to be more to this. I took my first
            computer science course without a clue of what to expect. Best
            decision I ever made! I found my passion!
          </p>
          <Link to="/resume" className="button featured">
            My Resume
          </Link>
        </div>
        <div className="right">
          <img src={me} alt="A picture of Ahmad Ibrahim" />
        </div>
      </div>
      <div className="gallery">
        <button onClick={shiftLeft}>
          <LeftArrowIcon />
        </button>
        {images}
        <button onClick={shiftRight}>
          <RightArrowIcon />
        </button>
      </div>
    </main>
  );
};
export default About;
