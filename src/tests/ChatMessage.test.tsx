import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ChatMessage from "../components/ChatMessage";

test("renders message", () => {
  const message = {
    user: "This is a name",
    text: "This is a message",
  };

  render(<ChatMessage user={message.user} text={message.text} />);

  expect(screen.getByText(message.user)).toBeInTheDocument();
  expect(screen.getByText(message.text)).toBeInTheDocument();
});
