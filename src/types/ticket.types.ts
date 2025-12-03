export interface Ticket {
  id: string;
  userId: string;
  eventId: string;
  eventTitle: string;
  eventSeat: string;
  eventOrder: string;
  eventPlace: string;
  eventDate: string;
  eventTime: string;
  eventCost: string;
  eventImageUrl: string;
  vip: boolean;
  purchasedAt: string;
  scanned: boolean;
}

export interface TransformedTicket {
  id: number;
  eventName: string;
  ticketType: string;
  imageUrl: string;
  date: string;
  location: string;
  seat: string;
  orderNumber: string;
  qrCode: string;
  eventId: string; 
  purchasedAt: string;
}