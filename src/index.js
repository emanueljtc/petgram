/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable semi */
import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { App } from "./App";

const client = new ApolloClient({
  uri: "https://petsgram-server-mappedev-339gmifsh.vercel.app/graphql",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
