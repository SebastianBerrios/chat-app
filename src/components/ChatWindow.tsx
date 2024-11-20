import ChatMessage from "./ChatMessage";

interface ChatWindowProps {
  messages: { id: number; user: string; text: string }[];
}

export default function ChatWindow({ messages }: ChatWindowProps) {
  return (
    <div className="w-80 md:w-[520px] lg:w-[720px] max-h-[55svh] px-4 flex flex-col gap-3 overflow-y-auto">
      {messages.map((message) => (
        <ChatMessage key={message.id} user={message.user} text={message.text} />
      ))}
    </div>
  );
}
