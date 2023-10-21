import checkIcon from "../assets/images/icon-check.svg";
import { useState } from "react";
export default function Checkbox() {

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const iconStyle = {
    display: isChecked ? "block" : "none",
    backgroundImage: `url(${checkIcon})`,
  };

  return (
    <label className="cursor-pointer">
      <div
        className={`
        rounded-full
        w-6 h-6
        border
        border-very-dark-grayish-blue
        hover:border-indigo-500
        transition-all duration-300
        relative
      `}
        onClick={toggleCheckbox}
      >
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-indigo-500 rounded-full"
          style={iconStyle}
        />
      </div>
    </label>
  );
}
