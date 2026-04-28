declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const trackLead = () => {
  window.fbq?.('track', 'Lead');
};
