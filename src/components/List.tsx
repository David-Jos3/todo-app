import Checkbox from "./Checkbox";

export default function List() {
  return (
    <div className="w-auto bg-very-dark-desaturated-blue  h-20 flex items-center p-5 gap-5 border-b-2">
      <Checkbox />
      <li className="text-light-grayish-blue text-lg list-none">
        Complete online Javascript course
      </li>
    </div>
  );
}
