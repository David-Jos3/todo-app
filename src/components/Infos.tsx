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
    <div className="flex items-center p-6 justify-between text-dark-grayish-blue font-normal py-3  sm:py-3 ">
      <p className="sm:text-sm"> {quantityOfItems} items left </p>
      <p onClick={onClick} className={`cursor-pointer ${hoverTextColorClass}  sm:text-base`}>
        Clear Completed
      </p>
    </div>
  );
}
