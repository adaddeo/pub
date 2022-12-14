/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface JournalInterface extends utils.Interface {
  functions: {
    "createIssue(uint256,uint256,uint256,uint256)": FunctionFragment;
    "createPublication(string)": FunctionFragment;
    "createSubmission(uint256,uint256,string)": FunctionFragment;
    "issueRewards(uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "publishIssue(uint256,uint256,uint256[],string)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "submissionFee(uint256,uint256)": FunctionFragment;
    "submissionsCount(uint256,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createIssue"
      | "createPublication"
      | "createSubmission"
      | "issueRewards"
      | "owner"
      | "publishIssue"
      | "renounceOwnership"
      | "submissionFee"
      | "submissionsCount"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createIssue",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createPublication",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "createSubmission",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "issueRewards",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "publishIssue",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "submissionFee",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "submissionsCount",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createIssue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createPublication",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createSubmission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "issueRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "publishIssue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submissionFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submissionsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "IssuePublished(uint256,uint256,uint256[],string)": EventFragment;
    "NewIssue(uint256,uint256)": EventFragment;
    "NewPublication(uint256,string)": EventFragment;
    "NewSubmission(uint256,uint256,uint256,string)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "IssuePublished"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewIssue"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPublication"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewSubmission"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface IssuePublishedEventObject {
  publicationId: BigNumber;
  issueId: BigNumber;
  _submissionIds: BigNumber[];
  data: string;
}
export type IssuePublishedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber[], string],
  IssuePublishedEventObject
>;

export type IssuePublishedEventFilter = TypedEventFilter<IssuePublishedEvent>;

export interface NewIssueEventObject {
  publicationId: BigNumber;
  issueId: BigNumber;
}
export type NewIssueEvent = TypedEvent<
  [BigNumber, BigNumber],
  NewIssueEventObject
>;

export type NewIssueEventFilter = TypedEventFilter<NewIssueEvent>;

export interface NewPublicationEventObject {
  publicationId: BigNumber;
  title: string;
}
export type NewPublicationEvent = TypedEvent<
  [BigNumber, string],
  NewPublicationEventObject
>;

export type NewPublicationEventFilter = TypedEventFilter<NewPublicationEvent>;

export interface NewSubmissionEventObject {
  publicationId: BigNumber;
  issueId: BigNumber;
  submissionId: BigNumber;
  content: string;
}
export type NewSubmissionEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string],
  NewSubmissionEventObject
>;

export type NewSubmissionEventFilter = TypedEventFilter<NewSubmissionEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Journal extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: JournalInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createIssue(
      _publicationId: PromiseOrValue<BigNumberish>,
      _submissionsOpenBlock: PromiseOrValue<BigNumberish>,
      _submissionsCloseBlock: PromiseOrValue<BigNumberish>,
      _submissionFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createPublication(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createSubmission(
      _publicationId: PromiseOrValue<BigNumberish>,
      _issueId: PromiseOrValue<BigNumberish>,
      content: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    issueRewards(
      _publicationId: PromiseOrValue<BigNumberish>,
      _issueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    publishIssue(
      _publicationId: PromiseOrValue<BigNumberish>,
      _issueId: PromiseOrValue<BigNumberish>,
      _submissionIds: PromiseOrValue<BigNumberish>[],
      data: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submissionFee(
      _publicationId: PromiseOrValue<BigNumberish>,
      _issueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    submissionsCount(
      _publicationId: PromiseOrValue<BigNumberish>,
      _issueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createIssue(
    _publicationId: PromiseOrValue<BigNumberish>,
    _submissionsOpenBlock: PromiseOrValue<BigNumberish>,
    _submissionsCloseBlock: PromiseOrValue<BigNumberish>,
    _submissionFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createPublication(
    name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createSubmission(
    _publicationId: PromiseOrValue<BigNumberish>,
    _issueId: PromiseOrValue<BigNumberish>,
    content: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  issueRewards(
    _publicationId: PromiseOrValue<BigNumberish>,
    _issueId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  publishIssue(
    _publicationId: PromiseOrValue<BigNumberish>,
    _issueId: PromiseOrValue<BigNumberish>,
    _submissionIds: PromiseOrValue<BigNumberish>[],
    data: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submissionFee(
    _publicationId: PromiseOrValue<BigNumberish>,
    _issueId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  submissionsCount(
    _publicationId: PromiseOrValue<BigNumberish>,
    _issueId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createIssue(
      _publicationId: PromiseOrValue<BigNumberish>,
      _submissionsOpenBlock: PromiseOrValue<BigNumberish>,
      _submissionsCloseBlock: PromiseOrValue<BigNumberish>,
      _submissionFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    createPublication(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    createSubmission(
      _publicationId: PromiseOrValue<BigNumberish>,
      _issueId: PromiseOrValue<BigNumberish>,
      content: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    issueRewards(
      _publicationId: PromiseOrValue<BigNumberish>,
      _issueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    publishIssue(
      _publicationId: PromiseOrValue<BigNumberish>,
      _issueId: PromiseOrValue<BigNumberish>,
      _submissionIds: PromiseOrValue<BigNumberish>[],
      data: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    submissionFee(
      _publicationId: PromiseOrValue<BigNumberish>,
      _issueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    submissionsCount(
      _publicationId: PromiseOrValue<BigNumberish>,
      _issueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "IssuePublished(uint256,uint256,uint256[],string)"(
      publicationId?: PromiseOrValue<BigNumberish> | null,
      issueId?: PromiseOrValue<BigNumberish> | null,
      _submissionIds?: null,
      data?: null
    ): IssuePublishedEventFilter;
    IssuePublished(
      publicationId?: PromiseOrValue<BigNumberish> | null,
      issueId?: PromiseOrValue<BigNumberish> | null,
      _submissionIds?: null,
      data?: null
    ): IssuePublishedEventFilter;

    "NewIssue(uint256,uint256)"(
      publicationId?: PromiseOrValue<BigNumberish> | null,
      issueId?: null
    ): NewIssueEventFilter;
    NewIssue(
      publicationId?: PromiseOrValue<BigNumberish> | null,
      issueId?: null
    ): NewIssueEventFilter;

    "NewPublication(uint256,string)"(
      publicationId?: PromiseOrValue<BigNumberish> | null,
      title?: null
    ): NewPublicationEventFilter;
    NewPublication(
      publicationId?: PromiseOrValue<BigNumberish> | null,
      title?: null
    ): NewPublicationEventFilter;

    "NewSubmission(uint256,uint256,uint256,string)"(
      publicationId?: PromiseOrValue<BigNumberish> | null,
      issueId?: PromiseOrValue<BigNumberish> | null,
      submissionId?: null,
      content?: null
    ): NewSubmissionEventFilter;
    NewSubmission(
      publicationId?: PromiseOrValue<BigNumberish> | null,
      issueId?: PromiseOrValue<BigNumberish> | null,
      submissionId?: null,
      content?: null
    ): NewSubmissionEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    createIssue(
      _publicationId: PromiseOrValue<BigNumberish>,
      _submissionsOpenBlock: PromiseOrValue<BigNumberish>,
      _submissionsCloseBlock: PromiseOrValue<BigNumberish>,
      _submissionFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createPublication(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createSubmission(
      _publicationId: PromiseOrValue<BigNumberish>,
      _issueId: PromiseOrValue<BigNumberish>,
      content: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    issueRewards(
      _publicationId: PromiseOrValue<BigNumberish>,
      _issueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    publishIssue(
      _publicationId: PromiseOrValue<BigNumberish>,
      _issueId: PromiseOrValue<BigNumberish>,
      _submissionIds: PromiseOrValue<BigNumberish>[],
      data: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submissionFee(
      _publicationId: PromiseOrValue<BigNumberish>,
      _issueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    submissionsCount(
      _publicationId: PromiseOrValue<BigNumberish>,
      _issueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createIssue(
      _publicationId: PromiseOrValue<BigNumberish>,
      _submissionsOpenBlock: PromiseOrValue<BigNumberish>,
      _submissionsCloseBlock: PromiseOrValue<BigNumberish>,
      _submissionFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createPublication(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createSubmission(
      _publicationId: PromiseOrValue<BigNumberish>,
      _issueId: PromiseOrValue<BigNumberish>,
      content: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    issueRewards(
      _publicationId: PromiseOrValue<BigNumberish>,
      _issueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    publishIssue(
      _publicationId: PromiseOrValue<BigNumberish>,
      _issueId: PromiseOrValue<BigNumberish>,
      _submissionIds: PromiseOrValue<BigNumberish>[],
      data: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submissionFee(
      _publicationId: PromiseOrValue<BigNumberish>,
      _issueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    submissionsCount(
      _publicationId: PromiseOrValue<BigNumberish>,
      _issueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
