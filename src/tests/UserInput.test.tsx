import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import UserInput from "../components/UserInput";

test("updates input value and displays greeting after adding name", () => {
  const mockAddUserName = jest.fn();

  render(<UserInput addUserName={mockAddUserName} />);

  const input = screen.getByPlaceholderText("Escribe tu nombre aquí");
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "name" } });
  expect(input).toHaveValue("name");

  fireEvent.blur(input);
  expect(mockAddUserName).toHaveBeenCalledWith("name");
  expect(input).toHaveValue("");

  const greeting = screen.getByText("Hola, name");
  expect(greeting).toBeInTheDocument();
});

test("adds name and clears input when pressing Enter", () => {
  const mockAddUserName = jest.fn();

  render(<UserInput addUserName={mockAddUserName} />);

  const input = screen.getByPlaceholderText("Escribe tu nombre aquí");

  fireEvent.change(input, { target: { value: "name" } });

  fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });

  expect(mockAddUserName).toHaveBeenCalledWith("name");
  expect(input).toHaveValue("");
  expect(screen.getByText("Hola, name")).toBeInTheDocument();
});
