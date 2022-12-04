import { BigNumber, providers, Contract, utils, ContractFactory } from 'ethers';
// import { checkIfWalleMSsConnected } from './wallet_util';
import {
  userStore,
  userGettersStore,
  userActionsStore,
  BeneficiaryInput,
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
    amount: number,
    contractAddress: string,
    addressOwner: string
  ): Promise<boolean> {
    const allowance: BigNumber = await (
      (await this.tokenContract(contractAddress)) as Contract
    ).allowance(addressOwner, process.env.MARASCAN);
    console.log(allowance);
    return BigNumber.from(amount) <= allowance || false;
  }
  async approveContract(amount: number, contractAddress: string): Promise<any> {
    const tC = (await this.tokenContract(contractAddress)) as Contract;
    const tx: TransactionResponse = await tC.approve(
      process.env.MARASCAN,
      amount
    );
    await tx.wait();
    return true;
  }

  async makeDonation(
    amount: number,
    _amountNumber: number,
    contractAddress: string,
    donorAddress: string,
    beneficiaries: BeneficiaryInput,
    totalNumberOfAcres: number,
    isETHER: boolean,
    donationRequestId: number,
    isDisbursed: boolean
  ): Promise<any> {
    console.log(beneficiaries);
    if (isETHER || contractAddress === '') {
      // const etherAmount:BigNumber = utils.parseEther(utils.formatEther(_amountNumber))
      const options = { value: utils.parseEther(_amountNumber.toString()) };
      return await (
        (await this.maraScanContract()) as Contract
      ).SwapExactMaticForTokens(
        donationRequestId,
        beneficiaries,
        totalNumberOfAcres,
        '0x0000000000000000000000000000000000000000000000000000000000000000',
        isDisbursed,
        options
      );
    } else {
      const tx = ((await this.maraScanContract()) as Contract).donate(
        amount,
        donationRequestId,
        beneficiaries,
        totalNumberOfAcres,
        '0x0000000000000000000000000000000000000000000000000000000000000000',
        isDisbursed
      );
      console.log(tx);
      return tx;
      // }
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
