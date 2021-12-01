import React from 'react';
import { setupServer } from "msw/node";
import { render, screen, act } from "./test-utils";
import App from './App';
import { handlers } from "./mocks/handler"

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders header text', async () => {
  render(<App />);
  const headerText = await screen.getByText(/care recipients list/i);
  expect(headerText).toBeInTheDocument();
});

test('renders navbar in landing page', async () => {
  act(() => {
    render(<App />);
  });

  const navBar = screen.queryByTestId( "nav-bar")
  expect(navBar).toBeInTheDocument();
});
