export interface PaymentItem {
  userId: string;
  eventId: string;
  eventTitle: string;
  eventPlace: string;
  eventDate: string;
  eventTime: string;
  eventCost: number;
  eventImageUrl: string;
  vip: boolean;
}

export interface CreatePaymentIntentDTO {
  items: PaymentItem[];
  amount: number;
}

export interface PaymentIntentResponse {
  clientSecret: string;
  paymentIntentId: string;
  orderId: string;
  amount: number;
  currency: string;
  status: string;
}

export interface ConfirmPaymentResponse {
  success: boolean;
  status: string;
  paymentIntentId: string;
}

export interface HandleSuccessResponse {
  success: boolean;
  orderId: string;
  paymentIntentId: string;
  status: string;
  amount: number;
}
