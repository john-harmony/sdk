import * as crypto from '@harmony/crypto';
import * as utils from '@harmony/utils';

import { HttpProvider, Messenger, Blockchain } from '@harmony/network';
import { TransactionFactory, Transaction } from '@harmony/transaction';
import { Wallet, Account } from '@harmony/account';

class Harmony {
  Modules = {
    HttpProvider,
    Messenger,
    Blockchain,
    TransactionFactory,
    Wallet,
    Transaction,
    Account,
  };
  messenger: Messenger;
  transactions: TransactionFactory;
  wallet: Wallet;
  blockchain: Blockchain;
  crypto: any;
  utils: any;
  private provider: HttpProvider;

  constructor(url: string) {
    this.provider = new HttpProvider(url);
    this.messenger = new Messenger(this.provider);
    this.blockchain = new Blockchain(this.messenger);
    this.transactions = new TransactionFactory(this.messenger);
    this.wallet = new Wallet(this.messenger);
    this.crypto = crypto;
    this.utils = utils;
  }
}

export { Harmony };