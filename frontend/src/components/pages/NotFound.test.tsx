import React from "react";
import { render, screen } from "../../test-utils";
import App from "../../App";
import { createMemoryHistory } from "history";
import {BrowserRouter } from "react-router-dom";

test("renders not found component when route does not match", async () => {
  window.history.pushState({}, "", "/fake-ui-route");
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText(/The page you are looking for does not exist/i)).toBeInTheDocument();
});



