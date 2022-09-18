import { boot } from 'quasar/wrappers';
import WalletDialogComponent from '../components/WalletConnect.vue';
import ConnectWalletDialog from '../components/ConnectWalletDialog.vue';
import LoadScript from 'vue-plugin-load-script';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // somethin
  app.component('WalletDialogue', WalletDialogComponent);
  app.component('ConnectWallet', ConnectWalletDialog);

  // plugins
  app.use(LoadScript);
});
