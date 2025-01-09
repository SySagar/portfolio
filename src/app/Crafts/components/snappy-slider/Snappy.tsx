import "./snappy.css";
import { useState } from "react";

export default function Snappy() {
  const [value, setValue] = useState(3);
  const [animationClass, setAnimationClass] = useState("");

  const handleSlide = (e:any) => {
    const newValue = e.target.value;
    if (newValue > value) {
      setAnimationClass("fade-out");
    } else {
      setAnimationClass("fade-in");
    }
    setValue(newValue);
  };

  const handleAnimationEnd = () => {
    setAnimationClass("");
  };

  const test = (e:any) => {
      setValue(value > 0.5 ? Math.ceil(value) : Math.floor(value));
    
    // const newValue = e.target.value;
    // if (newValue > value) {
    //   setAnimationClass("fade-out");
    // } else {
    //   setAnimationClass("fade-in");
    // }
  };

  const max = 10;
  const min = 0;

  const getMarkerStyle = (position:any) => {
    const percentage = Math.abs(((position - min) / (max - min)) * 100);
    console.log(percentage);
    return { left: `calc(${percentage}% - ${position}px)` }; // Adjust for marker size
  };

  return (
    <div className="App flex flex-col justify-center h-full items-center bg-[#1B1B1B]">
      <br />
      <br />
      <div className="w-[420px]  text-white p-4 bg-black rounded-xl flex gap-4 justify-center items-center relative">
        <p
          className={`show tracking-tighter w-content text-nowrap h-10 absolute left-3 flex jutify-center items-center`}
        >
          <span onAnimationEnd={handleAnimationEnd} className={animationClass}>
            {Math.floor(value)}
          </span>
          &nbsp;/ 10
        </p>
        <div className="inner w-full relative ml-11">
          <input
            type="range"
            min={min}
            max={max}
            step={0.1}
            onMouseUp={test}
            value={value}
            onChange={handleSlide}
            className="slide h-[10px] w-4/5   rounded-xl"
          />
          {Array.from({ length: max - min + 1 }, (_, i) => i + min).map(
            (pos) => (
              <div
                key={pos}
                className="marker"
                style={getMarkerStyle(pos)}
              ></div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
