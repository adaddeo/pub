import { BrowserRouter, Routes, Route } from "react-router-dom";
import Publications from "./views/Publications";
import { ApolloProvider, gql } from "@apollo/client";
import { client } from "./apollo";
import { routes } from "./routes";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<Publications />} />
          <Route path={routes.submit} element={<Publications />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
