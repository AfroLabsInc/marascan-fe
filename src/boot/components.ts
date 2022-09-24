import { boot } from 'quasar/wrappers';
import WalletDialogComponent from 'src/components/WalletConnect.vue';
import ConnectWalletDialog from '../components/ConnectWalletDialog.vue';
import LoadScript from 'vue-plugin-load-script';
import LogoWhite from 'components/LogoWhite.vue';
import LogoBlack from 'components/LogoBlack.vue';
import DonationForm from 'components/DonationForm.vue';
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // somethin
  app.component('WalletConnect', WalletDialogComponent);
  app.component('ConnectWallet', ConnectWalletDialog);
  app.component('LogoWhite', LogoWhite);
  app.component('LogoBlack', LogoBlack);
  app.component('DonationForm', DonationForm);
  // plugins
  app.use(LoadScript);
});
