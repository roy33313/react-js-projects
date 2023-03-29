import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const addTasks = (items) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });

  items.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

describe("Todo", () => {
  test("1 task added should be display", () => {
    render(<MockTodo />);
    addTasks(["go home"]);
    const divElement = screen.getByTestId("div-container");
    expect(divElement.textContent).toBe("go home");
  });

  test("All tasks added should be display", () => {
    render(<MockTodo />);
    addTasks(["go home", "clean hands", "do dishes", "mop floor"]);
    const divElement = screen.getAllByTestId("div-container");
    expect(divElement.length).toBe(4);
  });

  test("when task is added initially it should be active", () => {
    render(<MockTodo />);
    addTasks(["go home"]);
    const divElement = screen.getByTestId("div-container");
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  test("when task is completed  it should be inactive", () => {
    render(<MockTodo />);
    addTasks(["go home"]);
    const divElement = screen.getByTestId("div-container");
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
