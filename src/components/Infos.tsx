interface ItemProps {
  quantityOfItems: number;
  onClick: () => void;
  hoverThemeMode: boolean;
}

export default function Infos({
  quantityOfItems,
  onClick,
  hoverThemeMode,
}: ItemProps) {
  
  const hoverTextColorClass = hoverThemeMode
    ? "hover:text-very-dark-blue"
    : "hover:text-light-grayish-blue-hover";

  return (
    <div className="flex items-center p-6 justify-between text-dark-grayish-blue font-normal py-3 ">
      <p> {quantityOfItems} items left </p>
      <div className=" flex  items-center justify-between gap-5 ">
        <p className="cursor-pointer text-blue-600">All</p>
        <p className={`cursor-pointer ${hoverTextColorClass}`}>Active</p>
        <p className={`cursor-pointer ${hoverTextColorClass}`}>Completed</p>
      </div>
      <p onClick={onClick} className={`cursor-pointer ${hoverTextColorClass}`}>
        Clear Completed
      </p>
    </div>
  );
}
