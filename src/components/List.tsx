import Checkbox from "./Checkbox";
import iconCross from "../assets/images/icon-cross.svg";

interface useProps {
  tasks: string;
  theme: boolean;
  deleteItem: (task: string) => void

}

export default function List({ tasks, theme, deleteItem }: useProps) {

  const bgThemeColorClass = theme
    ? "bg-light-grayish-blue-hover"
    : "bg-very-dark-desaturated-blue";

  return (
    <div
      className={`w-auto ${bgThemeColorClass} h-20 flex items-center p-5 gap-5 border-b-2 border-dark-grayish-blue`}
    >
      <Checkbox />
      <li className="text-dark-grayish-blue  text-lg list-none flex-1">
        {tasks}
      </li>
      <div onClick={() => deleteItem(tasks) } className="cursor-pointer">
        <img src={iconCross} alt="" />
      </div>
    </div>
  );
}
