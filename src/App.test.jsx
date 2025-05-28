import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

test("renders the recipe list page", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).to.equal("RECIPES");
});
