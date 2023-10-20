export default function Infos() {
  return (
    <div className="flex items-center p-6 justify-between text-dark-grayish-blue font-normal py-3 ">
      <p> 5 items left </p>
      <div className=" flex  items-center justify-between gap-5 ">
        <p className="cursor-pointer">All</p>
        <p className="cursor-pointer">Active</p>
        <p className="cursor-pointer">Completed</p>
      </div>
      <p className="cursor-pointer">Clear Completed</p>
    </div>
  );
}
