import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const MockSetTodos = jest.fn();
describe("AddInput", () => {
  test("should be able to type in input", () => {
    render(<AddInput todos={[]} setTodos={MockSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "hello" } });
    expect(inputElement.value).toBe("hello");
  });

  test("input should be empty when button is clicked", () => {
    render(<AddInput todos={[]} setTodos={MockSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /add/i });
    fireEvent.change(inputElement, { target: { value: "hello world" } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
