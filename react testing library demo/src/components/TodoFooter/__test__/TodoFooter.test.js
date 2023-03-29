import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};
describe("TodoFooter", () => {
  test("should render same text passed into title prop", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paraElement = screen.getByText(/5 Tasks left/i);
    expect(paraElement).toBeInTheDocument();
  });

  test('should render "task" when no of incomplete tasks are 1', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paraElement = screen.getByText(/1 Task left/i);
    expect(paraElement).toBeInTheDocument();
  });
});
