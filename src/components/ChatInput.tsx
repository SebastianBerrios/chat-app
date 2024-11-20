import { useState } from "react";

interface ChatInputProps {
  onSendMessage: (text: string) => void;
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [value, setValue] = useState<string>("");

  const handleSendMessage = () => {
    onSendMessage(value);
    setValue("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="py-4 flex justify-center items-center gap-4">
      <input
        className="h-fit py-2 px-5 rounded-3xl"
        type="text"
        value={value}
        onChange={(event) => setValue(event?.target?.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe tu mensaje aquí"
      />
      <button onClick={handleSendMessage}>
        <svg
          className="p-2 rounded-full bg-lightgray"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
          <path d="M6.5 12h14.5" />
        </svg>
      </button>
    </div>
  );
}
