import apiClient from "./api/axiosInstance";
import { ENDPOINTS } from "./api/endpoints";
import { type Ticket } from "../types/ticket.types";
import { type ApiError } from "../types/api.types";
import { AxiosError } from "axios";

export const ticketsService = {
  findAllByUserId: async (userId: string): Promise<Ticket[]> => {
    try {
      const response = await apiClient.get<Ticket[]>(
        `${ENDPOINTS.TICKETS.FIND_ALL}/${userId}`
      );
      
      return response.data;
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