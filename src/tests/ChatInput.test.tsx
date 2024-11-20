import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ChatInput from "../components/ChatInput";

test("updates input value and sends message when clicking send button", () => {
  const mockSendMessage = jest.fn();

  render(<ChatInput onSendMessage={mockSendMessage} />);

  const input = screen.getByPlaceholderText("Escribe tu mensaje aquí");
  const sendButton = screen.getByRole("button");

  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "This is a message" } });
  expect(input).toHaveValue("This is a message");

  fireEvent.click(sendButton);
  expect(mockSendMessage).toHaveBeenCalledWith("This is a message");
  expect(input).toHaveValue("");
});

test("sends message when pressing Enter", () => {
  const mockSendMessage = jest.fn();

  render(<ChatInput onSendMessage={mockSendMessage} />);

  const input = screen.getByPlaceholderText("Escribe tu mensaje aquí");

  fireEvent.change(input, { target: { value: "This is a message" } });

  fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });

  expect(mockSendMessage).toHaveBeenCalledWith("This is a message");
  expect(input).toHaveValue("");
});
