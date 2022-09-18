import {
  BigNumber,
  providers,
  Contract,
  utils,
  Wallet,
  ContractFactory,
  Transaction,
} from 'ethers';
// import { checkIfWalleMSsConnected } from './wallet_util';
import {
  userStore,
  userGettersStore,
  userActionsStore,
} from '../types/storeTypes';
import { tokenStandard, tokenStandardOptions } from '../types/types';
import { Store } from 'pinia';
import abi from '../abi';
import { checkIfWalletIsConnected } from './walletUtil';
// import { TransactionResponse } from '@ethersproject/abstract-provider';
import MS from '../../abi/MaraScan.json';
export default class MaraScan {
  // contractAddress: string;
  store: Store<'user', userStore, userGettersStore, userActionsStore>;
  // token_standard: 'erc20' | 'erc721' | 'erc1155';
  provider: any;
  constructor(
    $store: Store<'user', userStore, userGettersStore, userActionsStore>
    // token_standard: 'erc20' | 'erc721' | 'erc1155'
    // contract_address: string
  ) {
    // this.contractAddress = contract_address;
    // this.token_standard = token_standard;
    this.store = $store;
  }

  async initializeSinger(): Promise<providers.Web3Provider> {
    this.provider = await checkIfWalletIsConnected(this.store);
    console.log(this.provider);
    return new providers.Web3Provider(this.provider);
  }

  async tokenContract(contractAddress: string): Promise<Contract> {
    const connectedContract = new Contract(
      contractAddress,
      abi['erc20'],
      (await this.initializeSinger()).getSigner()
    );

    return connectedContract;
  }

  // initialize token gate
  async maraScanContract(): Promise<Contract> {
    const connectedContract = new ContractFactory(
      MS.abi,
      MS.bytecode,
      (await this.initializeSinger()).getSigner()
    );
    return connectedContract.attach(process.env.MARASCAN as string);
  }

  // verify address is valid
  static isValidAddress(address: string): boolean {
    return utils.isAddress(address);
  }

  async approveContract(
    amount: BigNumber,
    contractAddress: string
  ): Promise<any> {
    const tx = (
      (await this.tokenContract(contractAddress)) as Contract
    ).approve(process.env.MARASCAN, amount);
    await wait(5);
    return tx;
  }

  async makeDonation(amount: BigNumber): Promise<any> {
    return ((await this.maraScanContract()) as Contract).donate(
      '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
      amount,
      1,
      ['0xf7F8DCf8962872421373FF5cf2C4bB06357b7133'],
      [1],
      true
    );
  }
}

async function wait(sec: number) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < sec * 1000);
}
