import apiClient from "./api/axiosInstance";
import { ENDPOINTS } from "./api/endpoints";
import {
  type SearchEventsDTO,
  type TransformedEvent,
} from "../types/event.types";
import { type ApiError, type EventsApiResponse } from "../types/api.types";
import { AxiosError } from "axios";
import { DateParser } from "../utils/dateParser";

export const eventsService = {
  searchEvents: async (
    searchData: SearchEventsDTO
  ): Promise<TransformedEvent[]> => {
    try {
      const response = await apiClient.post<EventsApiResponse>(
        ENDPOINTS.EVENTS.SEARCH,
        searchData
      );
      
      const events: TransformedEvent[] = response.data.events.map((event) => ({
        eventId: event.eventId,
        title: event.title,
        description: event.description,
        place: event.place,
        dateTime: DateParser(event.date, event.time),
        date: event.date, 
        time: event.time, 
        cost: typeof event.cost === 'string' ? parseFloat(event.cost) : event.cost, 
        source: event.source,
        imageUrl: event.imageUrl,
      }));

      return events;
    } catch (error) {
      const axiosError = error as AxiosError;
      const apiError: ApiError = {
        message:
          (axiosError as any).response?.data?.message || axiosError.message,
        status: axiosError.response?.status,
      };
      throw apiError;
    }
  },
};