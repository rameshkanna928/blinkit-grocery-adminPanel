import React, { Suspense, lazy } from "react";

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/index.tsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "http://192.168.7.68:5000/graphql",
  cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Suspense fallback={<h1>Loading............</h1>}>
            <App />
          </Suspense>
        </ApolloProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
