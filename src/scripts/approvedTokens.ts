export default [
  { value: 'MATIC', label: 'MATIC', contractAddress: '' },
  {
    value: 'USDC',
    label: 'USDC',
    contractAddress: process.env.USDC as string,
    decimal: 1000000,
  },
  {
    value: 'USDT',
    label: 'USDT',
    contractAddress: '0x509Ee0d083DdF8AC028f2a56731412edD63223B9',
    decimal: 1000000,
  },
  {
    value: 'APECOIN',
    label: 'APECOIN',
    contractAddress: '0x73967c6a0904aA032C103b4104747E88c566B1A2',
    decimal: 1000000000000000000,
  },
  {
    value: 'SHIBA INU',
    label: 'SHIBA INU',
    contractAddress: '0x73967c6a0904aA032C103b4104747E88c566B1A2',
    decimal: 1000000000000000000,
  },
  {
    value: 'DAI',
    label: 'DAI TOKEN',
    contractAddress: '0x73967c6a0904aA032C103b4104747E88c566B1A2',
    decimal: 1000000000000000000,
  },
  {
    value: 'XRP',
    label: 'XRP',
    contractAddress: '0x73967c6a0904aA032C103b4104747E88c566B1A2',
    decimal: 1000000000000000000,
  },
  {
    value: 'LRC',
    label: 'LRC',
    contractAddress: '0x73967c6a0904aA032C103b4104747E88c566B1A2',
    decimal: 1000000000000000000,
  },
];
