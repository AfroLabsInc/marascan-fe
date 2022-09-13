import axios from 'axios';
import { defineStore } from 'pinia';
import { userStore } from '../scripts/types/storeTypes';

// import obj2fd from "obj2fd"
export const useUserStore = defineStore('user', {
  state: (): userStore => ({
    openWalletModal: false,
    chainMismatch: false,
    walletIsLoading: true,
    account: '',
    provider: undefined,
    reciept: null,
    isTransacting: false,
    tx: null,
    error: {
      state: false,
      msg: '',
    },
    gatedResponseData: null,
    gatedResponseStatus: 0,
    gateItem: null,
    creator: null,
  }),

  getters: {
    Account(state: userStore): string {
      return state.account;
    },
    AccountFormated(state: userStore): string {
      if (state.account) {
        return state.account.substr(0, 5) + '...' + state.account.substr(-4);
      }
      return '';
    },
    getErrorMessage(state: userStore): { state: boolean; msg: string } {
      return state.error;
    },
    LoadingWalletState(state: userStore): boolean {
      return state.walletIsLoading;
    },
    walletModal(state): boolean {
      return state.openWalletModal;
    },
  },

  actions: {
    formatAddress(address: string): string {
      if (address) {
        return address.substr(0, 5) + '...' + address.substr(-4);
      }
      return '';
    },

    async registerDonor(payload: {
      email: string;
      password: string;
      donorType: string;
    }): Promise<void> {
      console.log('Register');
      try {
        console.log('submission');
        const formData = new FormData();
        formData.append('email', payload.email);
        formData.append('password', payload.password);
        formData.append('donorType', payload.donorType);
        await axios
          .post('/auth/donors/register', formData)
          .then((response) => {
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err.response.data);
            console.log(err);
          });
      } catch (error: any) {
        console.log(error.response.data);
      }
    },
  },
});
