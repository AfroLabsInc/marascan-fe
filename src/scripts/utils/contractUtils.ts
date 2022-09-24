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
import { Store } from 'pinia';
import abi from '../abi';
import { checkIfWalletIsConnected } from './walletUtil';
// import { TransactionResponse } from '@ethersproject/abstract-provider';
import MS from '../../abi/MaraScan.json';
import { TransactionResponse } from '@ethersproject/abstract-provider';
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

  async checkAllowace(
    amount: BigNumber,
    contractAddress: string,
    addressOwner: string
  ): Promise<boolean> {
    const allowance: BigNumber = await (
      (await this.tokenContract(contractAddress)) as Contract
    ).allowance(addressOwner, process.env.MARASCAN);
    console.log(allowance);
    return amount <= allowance || false;
  }
  async approveContract(
    amount: BigNumber,
    contractAddress: string
  ): Promise<any> {
    const tC = (await this.tokenContract(contractAddress)) as Contract;
    const tx: TransactionResponse = await tC.approve(
      process.env.MARASCAN,
      amount
    );
    await tx.wait();
    return true;
  }

  async makeDonation(
    amount: BigNumber,
    _amountNumber: number,
    contractAddress: string,
    donorAddress: string,
    isETHER: boolean,
    donationRequestId: number
  ): Promise<any> {
    if (isETHER || contractAddress === '') {
      // const etherAmount:BigNumber = utils.parseEther(utils.formatEther(_amountNumber))
      const options = { value: utils.parseEther('${_amountNumber}') };
      return await (
        (await this.maraScanContract()) as Contract
      ).SwapExactETHForTokens(
        1,
        donationRequestId,
        [
          ['0xf7F8DCf8962872421373FF5cf2C4bB06357b7133', 2],
          ['0xf7F8DCf8962872421373FF5cf2C4bB06357b7133', 2],
        ],
        4,
        '0x0000000000000000000000000000000000000000000000000000000000000000',
        true,
        options
      );
    } else {
      if (await this.checkAllowace(amount, contractAddress, donorAddress)) {
        console.log(3);
        return ((await this.maraScanContract()) as Contract).donate(
          amount,
          donationRequestId,
          [
            ['0xf7F8DCf8962872421373FF5cf2C4bB06357b7133', 1],
            ['0x0517417c1f98a61c8d3b1df1748dec84acda21e7', 2],
          ],
          3,
          '0x0000000000000000000000000000000000000000000000000000000000000000',
          true
        );
      }
    }
  }
}

async function wait(sec: number) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < sec * 1000);
}
