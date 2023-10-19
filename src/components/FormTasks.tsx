import { useState } from "react";
import { FormEvent } from "react";
import List from "./List";

export default function Formtask() {
  const [valueInput, setVelueIntput] = useState<string>();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setVelueIntput("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-16">
      <div className=" flex items-center justify-start  gap-3 bg-very-dark-desaturated-blue rounded-lg p-5 mb-9">
        <div className=" rounded-full w-16 h-6 border border-very-dark-grayish-blue bg-transparent"></div>
        <input
          className="w-screen bg-transparent  text-very-dark-grayish-blue text-lg  outline-none  p-2 "
          type="text"
          placeholder="Create a new todo..."
          value={valueInput}
        />
      </div>
      <div className="rounded-lg">
        <List />
        <List />
        <List />
        <List />
      </div>
    </form>
  );
}
