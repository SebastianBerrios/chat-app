import ChatInput from "./ChatInput";
import ChatWindow from "./ChatWindow";
import UserInput from "./UserInput";
import { useChat } from "../hooks/useChat";

export default function ChatApp() {
  const { messages, setUserName, sendChatMessage } = useChat(
    "ws://localhost:8080"
  );

  return (
    <>
      <main className="bg-darkblue h-screen grid grid-rows-[auto_1fr]">
        <section className="grid justify-items-center gap-3">
          <h1 className="heading">Bienvenido a Chat App</h1>
          <UserInput addUserName={setUserName} />
        </section>
        <section className="grid grid-rows-[1fr_auto] justify-center">
          <ChatWindow messages={messages} />
          <ChatInput onSendMessage={sendChatMessage} />
        </section>
      </main>
    </>
  );
}
