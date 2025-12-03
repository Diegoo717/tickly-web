import { useState, useEffect } from "react";
import { ticketsService } from "../services/ticketsService";
import { type Ticket, type TransformedTicket } from "../types/ticket.types";
import { type ApiError } from "../types/api.types";

export const useTickets = (userId: string | null) => {
  const [tickets, setTickets] = useState<TransformedTicket[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);

  const formatDateTime = (eventDate: string, eventTime: string): string => {
    const date = new Date(`${eventDate}T${eventTime}`);
    const dateOptions: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };

    const formattedDate = date.toLocaleDateString("en-US", dateOptions);
    const formattedTime = date.toLocaleTimeString("en-US", timeOptions);

    return `${formattedDate} - ${formattedTime}`;
  };

  const transformTickets = (rawTickets: Ticket[]): TransformedTicket[] => {
    return rawTickets.map((ticket, index) => ({
      id: index + 1,
      eventName: ticket.eventTitle,
      ticketType: ticket.vip ? "VIP Pass" : "General Admission",
      imageUrl: ticket.eventImageUrl,
      date: formatDateTime(ticket.eventDate, ticket.eventTime),
      location: ticket.eventPlace,
      seat: ticket.eventSeat,
      orderNumber: `#${ticket.eventOrder.substring(0, 5).toUpperCase()}`,
      qrCode: ticket.eventId,
      eventId: ticket.eventId,
      purchasedAt: ticket.purchasedAt
    }));
  };

  const fetchTickets = async () => {
    if (!userId) {
      setError({ message: "User ID is required" });
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const rawTickets = await ticketsService.findAllByUserId(userId);

      const transformedTickets = transformTickets(rawTickets);

      setTickets(transformedTickets);
    } catch (err: any) {
      console.error("Error fetching tickets:", err);
      setError({
        message: err.message || "Failed to load tickets",
        status: err.status,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, [userId]);

  return { tickets, loading, error, refetch: fetchTickets };
};
