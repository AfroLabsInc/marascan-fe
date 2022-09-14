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
  createDonorProfile: (payload: donorProfile) => void;
  walletLogin: (payload: { accountAddress: string }) => void;
  walletRegister: (payload: {
    accountAddress: string;
    donorType: string;
  }) => void;
  handleLogin: () => void;
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
