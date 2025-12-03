export const ENDPOINTS = {
  EVENTS: {
    SEARCH: '/events',
  },
  PAYMENTS: {
    CREATE_INTENT: '/stripe/create-payment-intent',
    CONFIRM_PAYMENT: '/stripe/confirm-payment',
    HANDLE_SUCCESS: '/stripe/handle-success',
  },
} as const;