// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/vitest';
import { setupServer } from 'msw/node';
import { vi } from 'vitest';
import { createBrowserRouter, createMemoryRouter,
         BrowserRouter, MemoryRouter } from 'react-router-dom';

// This updates the location from the default of http://localhost:3000.
// Doesn't affect the functionality of the code (MSW doesn't seem to reference
// location), but added to prevent confusion in case students check location.
location = new URL ("http://localhost:5173");

// This has to be called AFTER opening the server b/c that's when MSW mocks
// fetch. MSW should restore global.fetch when close server.
export function allowRelativeURLs () {
  const mswFetch = global.fetch;
  global.fetch = async (url, init) => {
    return url[0] === '/' ?
      await mswFetch(`http://localhost:5173${url}`, init) :
      await mswFetch(url, init);
  };
}

// This configures a request mocking server with the given request handlers.
export const createMockServer = (handlers) => {
  const server = setupServer(...handlers);

  // Uncomment to log when MSW intercepts a request
  // server.events.on('request:start', ({ request }) => {
  //   console.log('MSW intercepted:', request.method, request.url)
  // })
  
  return {
    ...server,
    resetHandlers: (handlers = []) => server.resetHandlers(...handlers),
    openServer: () => server.listen({
      onUnhandledRequest(req) {
        console.error(
          'Found an unhandled %s request to %s',
          req.method,
          req.url.href,
        )
      }
    }),
    closeServer: () => server.close()
  };
};

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual, // use actual React Router for everything but createBrowserRouter
    createBrowserRouter: vi.fn(),
    BrowserRouter: vi.fn()
  }
});

export const initializeRouter = async (path) => {
  vi.resetModules();
  createBrowserRouter.mockImplementation((routes) => {
    return createMemoryRouter(routes, {
      initialEntries: [path]
    });
  });
  BrowserRouter.mockImplementation((props) => {
    return MemoryRouter({...props, initialEntries: [path]});
  });
  return (await import("./src/App")).default;
}

// Uses the modern version of the Fisher–Yates shuffle algorithm:
Array.prototype.shuffle = function() {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const x = this[i];
    this[i] = this[j];
    this[j] = x;
  }
  return this;
} 
