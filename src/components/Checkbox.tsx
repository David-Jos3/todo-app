import checkIcon from "../assets/images/icon-check.svg";

interface Props {
  isChecked: boolean,
  toggleCheckbox: () => void
}

export default function Checkbox({ isChecked, toggleCheckbox }: Props) {
  
  const iconStyle = {
    display: isChecked ? "block" : "none",
    textDecoration: isChecked ? "line-through" : "",
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
