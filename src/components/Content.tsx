import { useState } from "react";
import iconSun from "../assets/images/icon-sun.svg";
import iconMoon from "../assets/images/icon-moon.svg";
import Formtask from "./FormTasks";

interface ContentProps {
  handleBanner: (mode: boolean) => void;
}

export default function Content({ handleBanner }: ContentProps) {
  const [themeMode, setThemeMode] = useState<boolean>(false);

  const handleMode = () => {
    setThemeMode(!themeMode);
    handleBanner(!themeMode);
  };

  return (
    <div className="w-1/2 p-5 mt-20 max-w-3xl z-10 absolute top-0 left-0 right-0 mx-auto ">
      <div className="flex justify-between ">
        <h1 className="text-white text-5xl -tracking-custom font-bold ">
          TODO
        </h1>
        <button onClick={handleMode}>
          <img
            src={themeMode ? iconMoon : iconSun}
            alt={themeMode ? "Moon icon" : "Sun icon"}
          />
        </button>
      </div>
      <Formtask themeMode={themeMode} />
    </div>
  );
}
