/*
  Adding global declaration for Facebook SDK.
  This interface ensures that the FB object and fbAsyncInit function are recognized globally.
  - Suat
*/

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

export {};
