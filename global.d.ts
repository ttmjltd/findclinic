declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

export {};
