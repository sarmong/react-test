import { Provider } from "react-redux";

import { store } from "./store";

export const withProviders = (WrappedComponent) => {
  const displayName = WrappedComponent.displayName ?? WrappedComponent.name;

  const ComponentWithProviders = () => (
    <Provider store={store}>
      <WrappedComponent />
    </Provider>
  );

  ComponentWithProviders.displayName = `withProviders(${displayName})`;

  return ComponentWithProviders;
};
