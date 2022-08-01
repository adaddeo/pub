import Publications from "./views/Publications";
import { ApolloProvider, gql } from "@apollo/client";
import { client } from "./apollo";

function App() {
  return (
    <ApolloProvider client={client}>
      <Publications />
    </ApolloProvider>
  );
}

export default App;
