import { usePublicationQuery } from "../generated/graphql";

function Publication() {
  const { data } = usePublicationQuery({
    variables: {
      id: "0",
    },
  });

  if (data) {
    return <div>{JSON.stringify(data)}</div>;
  }

  return <div>loading...</div>;
}

export default Publication;
