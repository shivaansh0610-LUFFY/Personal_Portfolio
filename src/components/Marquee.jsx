import React from 'react';
import './Marquee.css';

const Marquee = () => {
  const items = [
    "Frontend Development", "•", "Backend Architecture", "•",
    "Competitive Programming", "•", "Data Structures", "•",
    "Algorithms", "•", "System Design", "•",
    "React.js", "•", "Node.js", "•",
    "Problem Solving", "•", "UI/UX Design", "•"
  ];

  return (
    <div className="marquee-wrapper">
      <div className="marquee">
        <div className="marquee-content">
          {items.map((item, index) => (
            <span key={`first-${index}`} className={item === "•" ? "separator" : "item"}>
              {item}
            </span>
          ))}
          {/* Duplicate for infinite scroll effect */}
          {items.map((item, index) => (
            <span key={`second-${index}`} className={item === "•" ? "separator" : "item"}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
