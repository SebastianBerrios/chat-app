import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ChatWindow from "../components/ChatWindow";

test("renders multiple messages", () => {
  const messages = [
    { id: 1, user: "This is a name", text: "This is a message" },
    { id: 2, user: "This is a other name", text: "This is a other message" },
  ];

  render(<ChatWindow messages={messages} />);

  messages.forEach(({ user, text }) => {
    expect(screen.getByText(user)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
