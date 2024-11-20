import { renderHook, act } from "@testing-library/react";
import { useChat } from "../hooks/useChat";
import { ReadyState } from "react-use-websocket";

// Mock del módulo react-use-websocket
jest.mock("react-use-websocket", () => ({
  __esModule: true,
  default: jest.fn(),
  ReadyState: {
    CONNECTING: 0,
    OPEN: 1,
    CLOSING: 2,
    CLOSED: 3,
    UNINSTANTIATED: -1,
  },
}));

describe("useChat", () => {
  const mockUrl = "ws://localhost:8080";
  let mockSendMessage: jest.Mock;
  let mockLastMessage: { data: string } | null;
  let mockReadyState: number;

  beforeEach(() => {
    mockSendMessage = jest.fn();
    mockLastMessage = null;
    mockReadyState = ReadyState.OPEN;

    (require("react-use-websocket").default as jest.Mock).mockImplementation(
      () => ({
        sendMessage: mockSendMessage,
        lastMessage: mockLastMessage,
        readyState: mockReadyState,
      })
    );
  });

  it("initialize with an empty message array", () => {
    const { result } = renderHook(() => useChat(mockUrl));
    expect(result.current.messages).toEqual([]);
  });

  it("update username correctly", () => {
    const { result } = renderHook(() => useChat(mockUrl));

    act(() => {
      result.current.setUserName("Name");
    });

    const testMessage = "This is a message";
    act(() => {
      result.current.sendChatMessage(testMessage);
    });

    expect(mockSendMessage).toHaveBeenCalledWith(
      expect.stringContaining('"user":"Name"')
    );
  });

  it("handle incoming messages correctly", () => {
    const incomingMessage = {
      id: 1,
      user: "Name",
      text: "This is a message",
    };

    mockLastMessage = { data: JSON.stringify(incomingMessage) };

    (require("react-use-websocket").default as jest.Mock).mockImplementation(
      () => ({
        sendMessage: mockSendMessage,
        lastMessage: mockLastMessage,
        readyState: mockReadyState,
      })
    );

    const { result } = renderHook(() => useChat(mockUrl));

    expect(result.current.messages).toContainEqual(incomingMessage);
  });

  it("should not send messages when the WebSocket is closed", () => {
    mockReadyState = ReadyState.CLOSED;

    (require("react-use-websocket").default as jest.Mock).mockImplementation(
      () => ({
        sendMessage: mockSendMessage,
        lastMessage: mockLastMessage,
        readyState: mockReadyState,
      })
    );

    const { result } = renderHook(() => useChat(mockUrl));

    const consoleSpy = jest.spyOn(console, "error").mockImplementation();

    act(() => {
      result.current.sendChatMessage("This is a message");
    });

    expect(mockSendMessage).not.toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith(
      "WebSocket is not open. Cannot send message."
    );

    consoleSpy.mockRestore();
  });

  it("handling errors in message parsing", () => {
    mockLastMessage = { data: "invalid json" };

    (require("react-use-websocket").default as jest.Mock).mockImplementation(
      () => ({
        sendMessage: mockSendMessage,
        lastMessage: mockLastMessage,
        readyState: mockReadyState,
      })
    );

    const consoleSpy = jest.spyOn(console, "error").mockImplementation();

    renderHook(() => useChat(mockUrl));

    expect(consoleSpy).toHaveBeenCalledWith(
      "Error parsing incoming message:",
      expect.any(Error)
    );

    consoleSpy.mockRestore();
  });
});
