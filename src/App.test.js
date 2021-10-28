import { render } from "@testing-library/react";

// import { App } from 'app';

let App;

describe("App", () => {
  beforeEach(async () => {
    jest.resetModules();
    // App = await import('../app').then((w) => w.default);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    App = require("./App").default;
  });

  it("should show error if user doesn't have DE asset", async () => {
    const { findByText } = render(<App />);

    await findByText(/eror/i);
  });

  it("should show error if the server errored", async () => {
    const { findByText } = render(<App />);

    await findByText(/error/i);
  });
});
