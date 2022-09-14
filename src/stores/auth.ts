import axios from 'axios';
import { defineStore } from 'pinia';
import { Cookies } from 'quasar';
import { Buffer } from 'buffer';
import { authStore } from '../scripts/types/storeTypes';

// use a base64 key to save token
const userTokenKey = Buffer.from(process.env.TOKEN_SALT!).toString('base64');
const userKey = Buffer.from(process.env.USER_KEY!).toString('base64');
const decodeUser = (base64: string) => {
  if (!base64) return null;
  return JSON.parse(Buffer.from(base64, 'base64').toString('utf8'));
};
export const useAuthStore = defineStore('auth', {
  state: (): authStore => ({
    token: Cookies.get(userTokenKey),
    donor: decodeUser(Cookies.get(userKey)) || null,
  }),

  getters: {
    // doubleCount(state) {
    //   return state.counter * 2;
    // },
  },

  actions: {
    async registerDonor(payload: {
      email: string;
      password: string;
      donorType: string;
    }): Promise<void> {
      try {
        const formData = new FormData();
        formData.append('email', payload.email);
        formData.append('password', payload.password);
        formData.append('donorType', payload.donorType);
        await axios
          .post('/auth/donors/register', formData)
          .then((response) => {
            const { token, donor } = response.data.data;

            // save token to state
            this.AUTH_SUCCESS(token);
            this.AUTH_USER(donor);
            // save token to cookie

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          })
          .catch((err) => {
            console.log(err.response.data);
            console.log(err);
          });
      } catch (error: any) {
        console.log(error.response.data);
      }
    },

    async loginDonor(payload: {
      email: string;
      password: string;
    }): Promise<void> {
      try {
        const formData = new FormData();
        formData.append('email', payload.email);
        formData.append('password', payload.password);
        await axios
          .post('/auth/donors/login', formData)
          .then((response) => {
            const { token, donor } = response.data.data;

            // save token to state
            this.AUTH_SUCCESS(token);
            this.AUTH_USER(donor);
            // save token to cookie

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          })
          .catch((err) => {
            console.log(err.response.data);
            console.log(err);
          });
      } catch (error: any) {
        console.log(error.response.data);
      }
    },

    // committers
    AUTH_SUCCESS(token: string) {
      // state.status = 'success'
      this.token = token;
      // Save User-token
      // const slaTokenEncode = Buffer.from('SLA|user-token').toString('base64')
      Cookies.set(userTokenKey, token, {
        expires: 28,
        path: '/',
        sameSite: 'Strict',
        httpOnly: false,
      });
    },

    AUTH_USER(donor: any) {
      this.donor = donor;
      const encodeUser = Buffer.from(JSON.stringify(donor)).toString('base64');
      Cookies.set(userKey, encodeUser, {
        expires: 28,
        path: '/',
        sameSite: 'Strict',
        httpOnly: false,
      });
    },
  },
});
