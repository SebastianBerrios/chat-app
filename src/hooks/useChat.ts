import { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

interface Message {
  id: number;
  user: string;
  text: string;
}

export const useChat = (url: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userName, setUserName] = useState<string>("");
  const { sendMessage, lastMessage, readyState } = useWebSocket(url);

  useEffect(() => {
    if (lastMessage !== null) {
      try {
        const parsedMessage: Message = JSON.parse(lastMessage.data);
        setMessages((prev) => [...prev, parsedMessage]);
      } catch (error) {
        console.error("Error parsing incoming message:", error);
      }
    }
  }, [lastMessage]);

  const sendChatMessage = (text: string) => {
    if (readyState === ReadyState.OPEN) {
      const message: Message = {
        id: Date.now(),
        user: userName,
        text,
      };
      sendMessage(JSON.stringify(message));
    } else {
      console.error("WebSocket is not open. Cannot send message.");
    }
  };

  return { messages, setUserName, sendChatMessage, readyState };
};
