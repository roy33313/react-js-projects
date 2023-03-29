import { render, screen } from "@testing-library/react";

import NewsItem from "../Components/NewsItem";

test("Test for NewsItem", () => {
  render(<NewsItem obj={{}} />);
  //   const linkElement = screen.getByText(/newsmonkey/i);
  //   expect(linkElement).toBeInTheDocument();
});
