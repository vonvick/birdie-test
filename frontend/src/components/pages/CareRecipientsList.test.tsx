import React from "react";
import { setupServer } from "msw/node";
import { render, screen, act, waitFor, fireEvent, getByText } from "../../test-utils";
import { handlers } from "../../mocks/handler"
import { createMemoryHistory } from "history";
import {BrowserRouter, Router} from "react-router-dom";
import recipients from "../../test-helpers/recipients.json";
import App from "../../App";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders the recipients table", async () => {
  const history = createMemoryHistory();

  act(() => {
    render(
      <Router history={history}>
        <App />
      </Router>
    );
  })

  const recipientsData = recipients.data;
  await waitFor(() => screen.getByText(new RegExp("ad3512a6-91b1-4d7d-a005-6f8764dd0111", "i")))

  for (let i = 0; i < recipientsData.length; i++) {
    const id = recipientsData[i].care_recipient_id
    expect(screen.getByText(new RegExp(`${id}`, "i"))).toBeInTheDocument();
  }
});

test("navigates to the recipient event component", async () => {
  const { container } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  await waitFor(() => screen.getByText(/df50cac5-293c-490d-a06c-ee26796f850d/i));
  fireEvent(getByText(container, "df50cac5-293c-490d-a06c-ee26796f850d"), new MouseEvent("click", {
    bubbles: true,
    cancelable: true
  }));

  await waitFor(() => screen.getByText(/task completed/i));

  expect(screen.getByText(/Recipient Events/i)).toBeInTheDocument();
  expect(screen.getByText(/task completed/i)).toBeInTheDocument();
});
