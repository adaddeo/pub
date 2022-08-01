export type Publication {
  id: number;
  title: string;
}

export type Issue {
  id: number;  
  publication: {
    id: number;
    title: string;
  }
}

export type Submission {
  id: number;
  title: string;
  body: string;
  issue: {
    id: number;
  {
  publication: {
    id: number;
    title: string;
  }
}
