import axios from 'axios';
import { defineStore, StoreDefinition } from 'pinia';
import {
  donorProfile,
  userStore,
  userGettersStore,
  userActionsStore,
} from '../scripts/types/storeTypes';
import { useAuthStore } from './auth';
import { useRouter } from 'vue-router';
// import obj2fd from "obj2fd"
export const useUserStore: StoreDefinition<
  'user',
  userStore,
  userGettersStore,
  userActionsStore
> = defineStore('user', {
  state: (): userStore => ({
    openWalletModal: false,
    donorProfile: null,
    donorType: '',
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
    walletModal(state: userStore): boolean {
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
    async createDonorProfile(payload: donorProfile): Promise<void> {
      try {
        const authUser = useAuthStore();
        console.log('11');
        const formData = new FormData();
        for (const key of Object.keys(payload)) {
          formData.append(key, payload[key]);
          console.log(key + ': ', payload[key]);
        }
        console.log('22');

        // send request
        await axios
          .post(`/donors/${authUser.donor.id}/profiles`, formData)
          .then((response) => {
            if ((response.status = 201)) {
              this.donorProfile = response.data.data;
              console.log(this.donorProfile);
            }
          })
          .catch((err) => {
            console.log(err.response.data);
            console.log(err);
          });
      } catch (error: any) {
        console.log(error.response.data);
      }
    },
    async walletLogin(payload: { accountAddress: string }): Promise<void> {
      const auth = useAuthStore();

      try {
        const formData = new FormData();
        formData.append('accountAddress', payload.accountAddress);

        // send request
        await axios
          .post('/donors/wallet-login', formData)
          .then(async (response) => {
            if ((response.status = 201)) {
              const { token, donor } = response.data.data;

              // save token to state
              auth.AUTH_SUCCESS(token);
              auth.AUTH_USER(donor);

              axios.defaults.headers.common[
                'Authorization'
              ] = `Bearer ${token}`;
            }
            if (response.status === 422) {
              await this.walletRegister({
                accountAddress: payload.accountAddress,
                donorType: this.donorType,
              });
            }
          })
          .catch((err) => {
            console.log(err.response.data);
            console.log(err);
          });
      } catch (error: any) {
        console.log(error.response.data);
      }
    },

    async walletRegister(payload: {
      accountAddress: string;
      donorType: string;
    }): Promise<void> {
      const auth = useAuthStore();

      try {
        const formData = new FormData();
        formData.append('accountAddress', payload.accountAddress);
        formData.append('donorType', payload.donorType);

        // send request
        await axios
          .post('/donors/wallet-register', formData)
          .then(async (response) => {
            if ((response.status = 201)) {
              const { token, donor } = response.data.data;

              // save token to state
              auth.AUTH_SUCCESS(token);
              auth.AUTH_USER(donor);

              axios.defaults.headers.common[
                'Authorization'
              ] = `Bearer ${token}`;

              // if (donor.) {

              // }
              const router = useRouter();

              // router.push()
            }
            // if (response.status === 422) {
            //   await this.walletLogin({
            //     accountAddress: payload.accountAddress,
            //   });
            // }
          })
          .catch((err) => {
            console.log(err.response.data);
            console.log(err);
          });
      } catch (error: any) {
        console.log(error.response.data);
      }
    },
    async handleLogin(): Promise<void> {
      await this.walletLogin({ accountAddress: this.account });
    },
  },
});
