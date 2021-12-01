import React from "react";
import { setupServer } from "msw/node";
import { render, screen, waitFor, fireEvent, getByText } from "../../test-utils";
import App from "../../App";
import { handlers } from "../../mocks/handler"
import {  BrowserRouter } from "react-router-dom";
import RecipientEvents from "./RecipientEvents";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders events when recipients exists", async () => {
  window.history.pushState({}, "", "/recipients/df50cac5-293c-490d-a06c-ee26796f850d");
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  await waitFor(() => screen.getByText(/task completed/i));
  expect(await screen.getByText(/click to load more/i)).toBeInTheDocument();
});

test("renders no event when recipient does not exist", async () => {
  window.history.pushState({}, "", "/recipients/fake-user");
  render(
    <BrowserRouter>
      <RecipientEvents />
    </BrowserRouter>
  );

  await waitFor(() => screen.getByText(/Recipient Events/i));
  expect(await screen.getByText(/No events exists for this recipient. Check that the recipient is valid./i)).toBeInTheDocument();
});

test("renders recipients list page when link is clicked on navbar", async () => {
  window.history.pushState({}, "", "/recipients/df50cac5-293c-490d-a06c-ee26796f850d");
  const { container } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  await waitFor(() => screen.getByText(/task completed/i));

  fireEvent(getByText(container, "Care Recipients"), new MouseEvent("click", {
    bubbles: true,
    cancelable: true
  }));

  expect(screen.getByText(/Care Recipients List/i)).toBeInTheDocument();
});



