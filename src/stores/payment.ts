import { defineStore } from 'pinia';
import axios from 'axios';
import {
  cardPayload,
  PaymentStoreState,
  PaymentPayload,
  DonationRequestPayload,
} from '../scripts/types/storeTypes';
import { useAuthStore } from './auth';

export const usePaymentStore = defineStore('payment', {
  state: (): PaymentStoreState => ({
    currentDonationRequest: null,
    currentDonationRequestId: 0,
    allCard: [],
    cardDonationStatus: null,
    currentCard: undefined,
    isAddingCard: false,
    allDonorsDonationRequest: [],
    allConservancies: [],
    categoriesInConservancy: [],
    loadingDonor: false,
    allDonations: [],
    currentDonationDetail: null,
  }),

  getters: {
    getDonor() {
      const auth = useAuthStore();
      return auth.donor;
    },
  },

  actions: {
    /**
     * Create a card
     */
    async createCard(card: cardPayload) {
      this.isAddingCard = true;
      await axios
        .post(`donors/${this.getDonor.id}/cards`, card)
        .then((response) => {
          this.currentCard = response.data.data;
        })
        .catch((err) => {
          console.log(err.response.data);
          console.log(err);
        });
      this.isAddingCard = false;
    },

    /**
     * get created card by uuid
     */
    async getAllCard() {
      await axios
        .get(`donors/${this.getDonor.id}/cards`)
        .then((result) => {
          this.allCard = result.data.data;
        })
        .catch((err) => {
          console.log(err.response.data);
          console.log(err);
        });
    },

    /**
     * make payment with card
     */
    async makeCardPayment(payload: PaymentPayload) {
      await axios
        .post(
          `donationRequests/${this.currentDonationRequest?.id}/pay`,
          payload
        )
        .then((response) => {
          this.cardDonationStatus = response.data.data;
        })
        .catch((err) => {
          console.log(err.response.data);
          console.log(err);
        });
    },

    /**
     * Create a Donation Request
     * @param payload
     */
    async createDonationRequest(payload: DonationRequestPayload) {
      console.log(payload);
      const auth = useAuthStore();
      console.log(auth.donor);
      await axios
        .post(`donors/${this.getDonor.id}/donationRequests`, payload)
        .then((response) => {
          this.currentDonationRequest = response.data.data;
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          this.currentDonationRequestId = this.currentDonationRequest!.id;
        })
        .catch((err) => {
          console.log(err.response.data);
          console.log(err);
        });
    },

    /**
     * Get donation requestdetails
     * @param id string
     */
    async getDonationRequest(id: string) {
      await axios
        .get(`donors/${this.getDonor.id}/donationRequests/${id}`)
        .then((response) => {
          this.currentDonationRequest = response.data.data;
        })
        .catch((err) => {
          console.log(err.response.data);
          console.log(err);
        });
    },

    /**
     * Get Donors Donations
     * @param id string
     */
    async getADonorsDonationRequest() {
      await axios
        .get(`donors/${this.getDonor.id}/donationRequests`)
        .then((response) => {
          this.allDonorsDonationRequest = response.data.data;
          this.loadingDonor = response.data.data.length > 0;
          // console.log(response.data.data);
        })
        .catch((err) => {
          console.log(err.response.data);
          console.log(err);
        });
    },

    /**
     * Get Donations
     */
    async getAllDonations() {
      await axios
        .get('/donations')
        .then((response) => {
          this.allDonations = response.data.data;
        })
        .catch((err) => {
          console.log(err.response.data);
          console.log(err);
        });
    },

    /**
     * Get Conservancy
     */
    async getAllConservancies() {
      await axios
        .get('/conservancies')
        .then((response) => {
          console.log('john');
          this.allConservancies = response.data.data;
        })
        .catch((err) => {
          console.log(err.response.data);
          console.log(err);
        });
    },

    /**
     * Get categories in conservancy
     * @param id string - conservancy id
     */
    async getCategoriesInAConservancy(id: number) {
      await axios
        .get(`conservancies/${id}/categories`)
        .then((response) => {
          console.log('john');
          this.categoriesInConservancy = response.data.data;
        })
        .catch((err) => {
          console.log(err.response.data);
          console.log(err);
        });
    },

    async getDonationDetail(id: string) {
      axios
        .get(`donations/${id}`)
        .then((response) => {
          console.log(response.data);
          this.currentDonationDetail = response.data.data;
        })
        .catch((err) => {
          console.log(err.response.data);
          console.log(err);
        });
    },
  },
});
