import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./app/store.ts";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import Apollo from "./app/Apollo.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Auth0Provider
    domain="akshaykp.uk.auth0.com"
    clientId="lQYY8Et7m6nISR9AgDgDSZ9ey3YMlYNq"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <Apollo>
        <App />
      </Apollo>
    </Provider>
  </Auth0Provider>
  // </React.StrictMode>,
);
