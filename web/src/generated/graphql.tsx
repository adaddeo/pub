import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

/** The block at which the query should be executed. */
export type Block_Height = {
  /** Value containing a block hash */
  hash?: InputMaybe<Scalars['Bytes']>;
  /** Value containing a block number */
  number?: InputMaybe<Scalars['Int']>;
  /**
   * Value containing the minimum block number.
   * In the case of `number_gte`, the query will be executed on the latest block only if
   * the subgraph has progressed to or past the minimum block number.
   * Defaults to the latest block when omitted.
   *
   */
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Issue = {
  __typename?: 'Issue';
  contractId: Scalars['BigInt'];
  id: Scalars['ID'];
  number: Scalars['BigInt'];
  publication: Publication;
  submissions: Array<Submission>;
};


export type IssueSubmissionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Submission_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Submission_Filter>;
};

export type Issue_Filter = {
  contractId?: InputMaybe<Scalars['BigInt']>;
  contractId_gt?: InputMaybe<Scalars['BigInt']>;
  contractId_gte?: InputMaybe<Scalars['BigInt']>;
  contractId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contractId_lt?: InputMaybe<Scalars['BigInt']>;
  contractId_lte?: InputMaybe<Scalars['BigInt']>;
  contractId_not?: InputMaybe<Scalars['BigInt']>;
  contractId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  number?: InputMaybe<Scalars['BigInt']>;
  number_gt?: InputMaybe<Scalars['BigInt']>;
  number_gte?: InputMaybe<Scalars['BigInt']>;
  number_in?: InputMaybe<Array<Scalars['BigInt']>>;
  number_lt?: InputMaybe<Scalars['BigInt']>;
  number_lte?: InputMaybe<Scalars['BigInt']>;
  number_not?: InputMaybe<Scalars['BigInt']>;
  number_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  publication?: InputMaybe<Scalars['String']>;
  publication_contains?: InputMaybe<Scalars['String']>;
  publication_contains_nocase?: InputMaybe<Scalars['String']>;
  publication_ends_with?: InputMaybe<Scalars['String']>;
  publication_ends_with_nocase?: InputMaybe<Scalars['String']>;
  publication_gt?: InputMaybe<Scalars['String']>;
  publication_gte?: InputMaybe<Scalars['String']>;
  publication_in?: InputMaybe<Array<Scalars['String']>>;
  publication_lt?: InputMaybe<Scalars['String']>;
  publication_lte?: InputMaybe<Scalars['String']>;
  publication_not?: InputMaybe<Scalars['String']>;
  publication_not_contains?: InputMaybe<Scalars['String']>;
  publication_not_contains_nocase?: InputMaybe<Scalars['String']>;
  publication_not_ends_with?: InputMaybe<Scalars['String']>;
  publication_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  publication_not_in?: InputMaybe<Array<Scalars['String']>>;
  publication_not_starts_with?: InputMaybe<Scalars['String']>;
  publication_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  publication_starts_with?: InputMaybe<Scalars['String']>;
  publication_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Issue_OrderBy {
  ContractId = 'contractId',
  Id = 'id',
  Number = 'number',
  Publication = 'publication',
  Submissions = 'submissions'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Publication = {
  __typename?: 'Publication';
  contractId: Scalars['BigInt'];
  id: Scalars['ID'];
  issues: Array<Issue>;
  issuesCount: Scalars['BigInt'];
  submissions: Array<Submission>;
  title: Scalars['String'];
};


export type PublicationIssuesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Issue_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Issue_Filter>;
};


export type PublicationSubmissionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Submission_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Submission_Filter>;
};

export type Publication_Filter = {
  contractId?: InputMaybe<Scalars['BigInt']>;
  contractId_gt?: InputMaybe<Scalars['BigInt']>;
  contractId_gte?: InputMaybe<Scalars['BigInt']>;
  contractId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contractId_lt?: InputMaybe<Scalars['BigInt']>;
  contractId_lte?: InputMaybe<Scalars['BigInt']>;
  contractId_not?: InputMaybe<Scalars['BigInt']>;
  contractId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  issuesCount?: InputMaybe<Scalars['BigInt']>;
  issuesCount_gt?: InputMaybe<Scalars['BigInt']>;
  issuesCount_gte?: InputMaybe<Scalars['BigInt']>;
  issuesCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  issuesCount_lt?: InputMaybe<Scalars['BigInt']>;
  issuesCount_lte?: InputMaybe<Scalars['BigInt']>;
  issuesCount_not?: InputMaybe<Scalars['BigInt']>;
  issuesCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Publication_OrderBy {
  ContractId = 'contractId',
  Id = 'id',
  Issues = 'issues',
  IssuesCount = 'issuesCount',
  Submissions = 'submissions',
  Title = 'title'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  issue?: Maybe<Issue>;
  issues: Array<Issue>;
  publication?: Maybe<Publication>;
  publications: Array<Publication>;
  submission?: Maybe<Submission>;
  submissions: Array<Submission>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryIssueArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryIssuesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Issue_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Issue_Filter>;
};


export type QueryPublicationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPublicationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Publication_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Publication_Filter>;
};


export type QuerySubmissionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubmissionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Submission_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Submission_Filter>;
};

export type Submission = {
  __typename?: 'Submission';
  body: Scalars['String'];
  contractId: Scalars['BigInt'];
  id: Scalars['ID'];
  issue: Issue;
  publication: Publication;
  submitter: Scalars['Bytes'];
  title: Scalars['String'];
};

export type Submission_Filter = {
  body?: InputMaybe<Scalars['String']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_contains_nocase?: InputMaybe<Scalars['String']>;
  body_ends_with?: InputMaybe<Scalars['String']>;
  body_ends_with_nocase?: InputMaybe<Scalars['String']>;
  body_gt?: InputMaybe<Scalars['String']>;
  body_gte?: InputMaybe<Scalars['String']>;
  body_in?: InputMaybe<Array<Scalars['String']>>;
  body_lt?: InputMaybe<Scalars['String']>;
  body_lte?: InputMaybe<Scalars['String']>;
  body_not?: InputMaybe<Scalars['String']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  body_not_contains_nocase?: InputMaybe<Scalars['String']>;
  body_not_ends_with?: InputMaybe<Scalars['String']>;
  body_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  body_not_in?: InputMaybe<Array<Scalars['String']>>;
  body_not_starts_with?: InputMaybe<Scalars['String']>;
  body_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  body_starts_with?: InputMaybe<Scalars['String']>;
  body_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contractId?: InputMaybe<Scalars['BigInt']>;
  contractId_gt?: InputMaybe<Scalars['BigInt']>;
  contractId_gte?: InputMaybe<Scalars['BigInt']>;
  contractId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contractId_lt?: InputMaybe<Scalars['BigInt']>;
  contractId_lte?: InputMaybe<Scalars['BigInt']>;
  contractId_not?: InputMaybe<Scalars['BigInt']>;
  contractId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  issue?: InputMaybe<Scalars['String']>;
  issue_contains?: InputMaybe<Scalars['String']>;
  issue_contains_nocase?: InputMaybe<Scalars['String']>;
  issue_ends_with?: InputMaybe<Scalars['String']>;
  issue_ends_with_nocase?: InputMaybe<Scalars['String']>;
  issue_gt?: InputMaybe<Scalars['String']>;
  issue_gte?: InputMaybe<Scalars['String']>;
  issue_in?: InputMaybe<Array<Scalars['String']>>;
  issue_lt?: InputMaybe<Scalars['String']>;
  issue_lte?: InputMaybe<Scalars['String']>;
  issue_not?: InputMaybe<Scalars['String']>;
  issue_not_contains?: InputMaybe<Scalars['String']>;
  issue_not_contains_nocase?: InputMaybe<Scalars['String']>;
  issue_not_ends_with?: InputMaybe<Scalars['String']>;
  issue_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  issue_not_in?: InputMaybe<Array<Scalars['String']>>;
  issue_not_starts_with?: InputMaybe<Scalars['String']>;
  issue_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  issue_starts_with?: InputMaybe<Scalars['String']>;
  issue_starts_with_nocase?: InputMaybe<Scalars['String']>;
  publication?: InputMaybe<Scalars['String']>;
  publication_contains?: InputMaybe<Scalars['String']>;
  publication_contains_nocase?: InputMaybe<Scalars['String']>;
  publication_ends_with?: InputMaybe<Scalars['String']>;
  publication_ends_with_nocase?: InputMaybe<Scalars['String']>;
  publication_gt?: InputMaybe<Scalars['String']>;
  publication_gte?: InputMaybe<Scalars['String']>;
  publication_in?: InputMaybe<Array<Scalars['String']>>;
  publication_lt?: InputMaybe<Scalars['String']>;
  publication_lte?: InputMaybe<Scalars['String']>;
  publication_not?: InputMaybe<Scalars['String']>;
  publication_not_contains?: InputMaybe<Scalars['String']>;
  publication_not_contains_nocase?: InputMaybe<Scalars['String']>;
  publication_not_ends_with?: InputMaybe<Scalars['String']>;
  publication_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  publication_not_in?: InputMaybe<Array<Scalars['String']>>;
  publication_not_starts_with?: InputMaybe<Scalars['String']>;
  publication_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  publication_starts_with?: InputMaybe<Scalars['String']>;
  publication_starts_with_nocase?: InputMaybe<Scalars['String']>;
  submitter?: InputMaybe<Scalars['Bytes']>;
  submitter_contains?: InputMaybe<Scalars['Bytes']>;
  submitter_in?: InputMaybe<Array<Scalars['Bytes']>>;
  submitter_not?: InputMaybe<Scalars['Bytes']>;
  submitter_not_contains?: InputMaybe<Scalars['Bytes']>;
  submitter_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Submission_OrderBy {
  Body = 'body',
  ContractId = 'contractId',
  Id = 'id',
  Issue = 'issue',
  Publication = 'publication',
  Submitter = 'submitter',
  Title = 'title'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  issue?: Maybe<Issue>;
  issues: Array<Issue>;
  publication?: Maybe<Publication>;
  publications: Array<Publication>;
  submission?: Maybe<Submission>;
  submissions: Array<Submission>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionIssueArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionIssuesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Issue_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Issue_Filter>;
};


export type SubscriptionPublicationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPublicationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Publication_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Publication_Filter>;
};


export type SubscriptionSubmissionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubmissionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Submission_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Submission_Filter>;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type PublicationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PublicationQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, title: string } | null };

export type PublicationsQueryVariables = Exact<{ [key: string]: never; }>;


export type PublicationsQuery = { __typename?: 'Query', publications: Array<{ __typename?: 'Publication', id: string, title: string, issuesCount: any, issues: Array<{ __typename?: 'Issue', id: string, number: any }> }> };


export const PublicationDocument = gql`
    query Publication($id: ID!) {
  publication(id: $id) {
    id
    title
  }
}
    `;

/**
 * __usePublicationQuery__
 *
 * To run a query within a React component, call `usePublicationQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePublicationQuery(baseOptions: Apollo.QueryHookOptions<PublicationQuery, PublicationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PublicationQuery, PublicationQueryVariables>(PublicationDocument, options);
      }
export function usePublicationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicationQuery, PublicationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PublicationQuery, PublicationQueryVariables>(PublicationDocument, options);
        }
export type PublicationQueryHookResult = ReturnType<typeof usePublicationQuery>;
export type PublicationLazyQueryHookResult = ReturnType<typeof usePublicationLazyQuery>;
export type PublicationQueryResult = Apollo.QueryResult<PublicationQuery, PublicationQueryVariables>;
export const PublicationsDocument = gql`
    query Publications {
  publications {
    id
    title
    issuesCount
    issues {
      id
      number
    }
  }
}
    `;

/**
 * __usePublicationsQuery__
 *
 * To run a query within a React component, call `usePublicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePublicationsQuery(baseOptions?: Apollo.QueryHookOptions<PublicationsQuery, PublicationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PublicationsQuery, PublicationsQueryVariables>(PublicationsDocument, options);
      }
export function usePublicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicationsQuery, PublicationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PublicationsQuery, PublicationsQueryVariables>(PublicationsDocument, options);
        }
export type PublicationsQueryHookResult = ReturnType<typeof usePublicationsQuery>;
export type PublicationsLazyQueryHookResult = ReturnType<typeof usePublicationsLazyQuery>;
export type PublicationsQueryResult = Apollo.QueryResult<PublicationsQuery, PublicationsQueryVariables>;