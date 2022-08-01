import { log, BigInt } from "@graphprotocol/graph-ts";
import { NewPublication, NewIssue } from "../generated/Journal/Journal";
import { Issue, Publication } from "../generated/schema";

export function handleNewPublication(event: NewPublication): void {
  const publication = new Publication(event.params.publicationId.toString());
  publication.title = event.params.title;
  publication.contractId = event.params.publicationId;
  publication.issuesCount = BigInt.fromString("0");
  publication.save();
}

export function handleNewIssue(event: NewIssue): void {
  const publicationId = event.params.publicationId.toString();
  const publication = Publication.load(publicationId);

  if (publication === null) {
    log.error("handleNewIssue: Publication does not exist.", [
      event.params.publicationId.toString(),
    ]);
    return;
  }

  const id = event.transaction.hash.toHex();
  const issueNumber = event.params.issueId.plus(BigInt.fromString("1"));
  const issue = new Issue(id);
  issue.publication = publication.id;
  issue.contractId = event.params.issueId;
  issue.number = issueNumber;
  issue.save();

  publication.issuesCount = issueNumber;
  publication.save();
}
