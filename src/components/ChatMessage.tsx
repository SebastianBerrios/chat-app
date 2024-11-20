interface ChatMessageProps {
  user: string;
  text: string;
}

export default function ChatMessage({ user, text }: ChatMessageProps) {
  return (
    <div className="max-w-fit max-h-fit bg-lightgray rounded-lg p-2">
      <span className="text-white">{user}</span>
      <p>{text}</p>
    </div>
  );
}
