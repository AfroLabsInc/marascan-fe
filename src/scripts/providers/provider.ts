import { providers } from 'ethers';
import NetworkUtils from '../utils/networkUtils';
import { checkIfWalletIsConnected } from '../utils/walletUtil';
import { useUserStore } from '../../stores/user';
export default class Provider {
  // provider: providers.Web3Provider;
  // network: string;
  constructor(network: string) {
    // this.network = network;
  }

  getProxyAddress(): string {
    return NetworkUtils.getProxyAddress(this.network);
  }

  async getProvider(): providers.JsonRpcProvider {
    await checkIfWalletIsConnected();
    return this.provider;
  }

  // set provider to preffered
  setProvider(network: string) {
    this.provider = new providers.JsonRpcProvider(
      NetworkUtils.getRpcUrl(network)
    );
  }
}
