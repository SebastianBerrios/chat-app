import { useState } from "react";

interface addUserProps {
  addUserName: (user: string) => void;
}

export default function UserInput({ addUserName }: addUserProps) {
  const [inputUser, setInputUser] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleAddNameUser = () => {
    addUserName(inputUser);
    setName(inputUser);
    setInputUser("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddNameUser();
    }
  };

  return (
    <div className="max-w-xs md:max-w-sm lg:max-w-md flex flex-col gap-4">
      <input
        className="py-2 px-5 rounded-3xl "
        type="text"
        value={inputUser}
        onChange={(e) => setInputUser(e.target.value)}
        onBlur={handleAddNameUser}
        onKeyDown={handleKeyDown}
        placeholder="Escribe tu nombre aquí"
      />
      <span className="paragraph">Hola, {name}</span>
    </div>
  );
}
