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
    allCard: [],
    cardDonationStatus: null,
    currentCard: undefined,
    isAddingCard: false,
    allDonationRequest: [],
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
      await axios
        .post(`donors/${this.getDonor.id}/donationRequests`, payload)
        .then((response) => {
          this.currentDonationRequest = response.data.data;
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
    async getAllDonorsDonationRequest() {
      await axios
        .get(`donors/${this.getDonor.id}/donationRequests`)
        .then((response) => {
          this.allDonationRequest = response.data.data;
        })
        .catch((err) => {
          console.log(err.response.data);
          console.log(err);
        });
    },
  },
});
