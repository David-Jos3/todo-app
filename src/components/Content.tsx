import icon from "../assets/images/icon-sun.svg";
import Formtask from "./FormTasks";

export default function Content() {
  const handleMode = () => {
    console.log("mudando tema");
  };

  return (
    <div className="w-1/2 p-5 mt-16 max-w-3xl z-10 h-auto ">
      <div className="flex justify-between ">
        <h1 className="text-white text-5xl -tracking-custom font-bold ">
          TODO
        </h1>
        <button onClick={handleMode}>
          <img src={icon} alt="" />
        </button>
      </div>
      <Formtask />
    </div>
  );
}
