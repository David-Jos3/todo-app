import Checkbox from "./Checkbox";
import iconCross from "../assets/images/icon-cross.svg";
import {useState } from "react";

interface useProps {
  tasks: string;
  theme: boolean;
  deleteItem: (task: string) => void;
}


export default function List({ tasks, theme, deleteItem }: useProps) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => setIsChecked(!isChecked);

  const bgThemeColorClass = theme
    ? "bg-light-grayish-blue-hover"
    : "bg-very-dark-desaturated-blue";

  const checked = isChecked ? "line-through " : "";

  return (
    
      <div
        className={`w-auto ${bgThemeColorClass} h-20 flex items-center p-5 gap-5 border-b-2 border-dark-grayish-blue sm:h-14`}
      >
        <Checkbox isChecked={isChecked} toggleCheckbox={toggleCheckbox} />

        <li
          className={`text-dark-grayish-blue ${checked}   text-lg list-none flex-1 sm:text-base`}
        >
          {tasks}
        </li>

        <div onClick={() => deleteItem(tasks)} className="cursor-pointer">
          <img src={iconCross} alt="icon cross" />
        </div>
      </div>
  
  );
}
