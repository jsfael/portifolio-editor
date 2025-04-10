import React from "react";
import styles from "../../styles/bubble.module.css";

const HeroText = () => {
  return (
    <div className=" ">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  return (
    <h2 className="text-5xl font-thin text-white cursor-default">
      {"Video Editor".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default HeroText;
