/* eslint-disable */

/// <reference types="vite/client" />
/// <reference types="vue/ref-macros" />

// Mocks all files ending in `.vue` showing them as plain Vue instances
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module '@walletconnect/web3-provider/dist/umd/index.min.js' {
  import WalletConnectProvider from '@walletconnect/web3-provider/dist/esm/index';
  export default WalletConnectProvider;
}
