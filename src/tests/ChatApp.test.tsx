import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ChatApp from "../components/ChatApp";
import { useChat } from "../hooks/useChat";

jest.mock("../hooks/useChat", () => ({
  useChat: jest.fn(),
}));

test("updates input value and sends message when clicking send button and pressing Enter", () => {
  const mockSetUserName = jest.fn();
  const mockSendChatMessage = jest.fn();
  const mockMessages = [{ id: 1, user: "user", text: "This is a message" }];

  (useChat as jest.Mock).mockReturnValue({
    messages: mockMessages,
    setUserName: mockSetUserName,
    sendChatMessage: mockSendChatMessage,
    readyState: 1,
  });

  render(<ChatApp />);

  expect(screen.getByText("Bienvenido a Chat App")).toBeInTheDocument();

  const inputUser = screen.getByPlaceholderText("Escribe tu nombre aquí");
  fireEvent.change(inputUser, { target: { value: "Name" } });
  fireEvent.keyDown(inputUser, { key: "Enter", code: "Enter", charCode: 13 });
  expect(mockSetUserName).toHaveBeenCalledWith("Name");

  const inputMessage = screen.getByPlaceholderText("Escribe tu mensaje aquí");
  fireEvent.change(inputMessage, {
    target: { value: "This is a message" },
  });
  fireEvent.keyDown(inputMessage, {
    key: "Enter",
    code: "Enter",
    charCode: 13,
  });
  expect(mockSendChatMessage).toHaveBeenCalledWith("This is a message");

  expect(screen.getByText("This is a message")).toBeInTheDocument();
});
