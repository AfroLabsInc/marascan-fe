/* eslint-disable @typescript-eslint/no-explicit-any */
import { Signer } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
export interface userStore {
  openWalletModal: boolean;
  chainMismatch: boolean;
  donorProfile: donorProfile | null;
  walletIsLoading: boolean;
  donorType: string;
  account: string;
  provider: undefined | Signer | Provider;
  reciept: any;
  isTransacting: boolean;
  tx: unknown;
  error: {
    state: boolean;
    msg: string;
  };
}
export interface userGettersStore {
  Account: (state: userStore) => string;
  AccountFormated: (state: userStore) => string;
  getErrorMessage: (state: userStore) => { state: boolean; msg: string };
  LoadingWalletState: (state: userStore) => boolean;
}

export interface userActionsStore {
  formatAddress(address: string): string;
  createDonorProfile(payload: donorProfile): Promise<void>;
  walletLogin(payload: { accountAddress: string }): Promise<void>;
  walletRegister(payload: {
    accountAddress: string;
    donorType: string;
  }): Promise<void>;
  getDonorProfileByWallet(accountAddress: string): Promise<void>;
  getDonorProfileById(id: string): Promise<void>;
  handleLogin(): Promise<void>;
}
export interface authStore {
  token: string;
  donor: any;
}

export type donorProfile = {
  firstName: string;
  lastName: string;
  occupation: string;
  address: string;
  email: string;
  country: string;
  region: string;
  [key: string]: string;
};

export type cardPayload = {
  billingDetails: {
    name: string;
    city: string;
    country: string;
    line1: string;
    line2: string;
    district: string;
    postalCode: string;
  };
  metadata: {
    email: string;
    phoneNumber: string;
    sessionId: string;
    ipAddress: string;
  };
  idempotencyKey: string;
  keyId: string;
  encryptedData: string;
  expMonth: number;
  expYear: number;
};

export type DonationRequest = {
  paymentMethod: 'fiat' | 'crypto';
  categoryIds: number[];
  amount: {
    currency: string;
    amount: number;
  };
  note: string;
  donorId: number;
  createdAt: string;
  updatedAt: string;
  id: number;
  [key: string]: any;
};

export type DonationRequestPayload = {
  paymentMethod: string;
  categoryIds: number[];
  conservancyId: number;
  amount: {
    currency: string;
    amount: number;
  };
  note: string;
};

export type Conservancy = {
  id: number;
  email: string;

  ethereumAccountAddress: string;
  name: string;
  description: string;
  registrationIdentification: string;
  coverImageId: null;
  createdAt: string;
  updatedAt: string;
  coverImage: null;
};

export type categoriesInConservancy = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  coverImageId: string;
  conservancyId: string;
  coverImage: string;
  beneficiaries: Beneficiary[];
};
export type Beneficiary = {
  id: number;
  categoryId: number;
  ethereumAccountAddress: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  country: string;
  region: string;
  address: string;
  updatedAt: string;
  conservancyId: string;
  land: {
    beneficiaryId: number;
    titleDeedIdentification: number;
    titleDeedImageId: string;
    numOfAcres: number;
    updatedAt: string;
  };
};

export interface PaymentStoreState {
  currentDonationRequest: null | DonationRequest;
  currentDonationRequestId: number;
  currentCard: Card | undefined;
  allCard: Card[] | [];
  isAddingCard: boolean;
  cardDonationStatus: any;
  allDonorsDonationRequest: DonationRequest[] | [];
  allConservancies: Conservancy[] | [];
  categoriesInConservancy: categoriesInConservancy[] | [];
  loadingDonor: boolean;
}
export type Card = {
  id: string;
  status: string;
  last4: string;
  billingDetails: {
    name: string;
    line1: string;
    line2: string;
    city: string;
    postalCode: string;
    district: string;
    country: string;
  };
  expMonth: number;
  expYear: number;
  network: string;
  bin: string;
  issuerCountry: string;
  fundingType: string;
  fingerprint: string;
  verification: {
    cvv: string | any;
    avs: string | any;
  };
  createDate: string;
  metadata: {
    phoneNumber: string;
    email: string;
  };
  updateDate: string;
};

export type PaymentPayload = {
  circleCardId: string;
  ipAddress: string;
  sessionId: string;
  idempotencyKey: string;
  keyId: string;
  verification: string;
};

type BeneficiaryDetails = [string, number];
export type BeneficiaryInput = BeneficiaryDetails[];
