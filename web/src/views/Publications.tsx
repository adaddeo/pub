import { usePublicationsQuery } from "../generated/graphql";

function Publications() {
  const { data, error } = usePublicationsQuery();

  if (error) {
    return <div className="text-red-600">{JSON.stringify(error)}</div>;
  }

  if (data) {
    return (
      <ul>
        {data.publications.map((publication) => (
          <li key={publication.id}>
            {publication.title} ({publication.issuesCount} issue
            {publication.issuesCount == "1" ? "" : "s"})
            <ul>
              {publication.issues.map((issue) => (
                <li key={issue.id}>#{issue.number}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  }

  return <div>loading...</div>;
}

export default Publications;
