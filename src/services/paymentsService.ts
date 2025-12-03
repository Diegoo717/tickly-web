import apiClient from "./api/axiosInstance";
import { ENDPOINTS } from "./api/endpoints";
import {
  type CreatePaymentIntentDTO,
  type PaymentIntentResponse,
  type ConfirmPaymentResponse,
  type HandleSuccessResponse,
} from "../types/payment.types";
import { type ApiError } from "../types/api.types";
import { AxiosError } from "axios";

export const paymentsService = {
  createPaymentIntent: async (
    paymentData: CreatePaymentIntentDTO
  ): Promise<PaymentIntentResponse> => {
    try {
      const response = await apiClient.post<PaymentIntentResponse>(
        ENDPOINTS.PAYMENTS.CREATE_INTENT,
        paymentData
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

  confirmPayment: async (
    paymentIntentId: string
  ): Promise<ConfirmPaymentResponse> => {
    try {
      const response = await apiClient.post<ConfirmPaymentResponse>(
        `${ENDPOINTS.PAYMENTS.CONFIRM_PAYMENT}/${paymentIntentId}`
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

  handleSuccess: async (
    paymentIntentId: string
  ): Promise<HandleSuccessResponse> => {
    try {
      const response = await apiClient.post<HandleSuccessResponse>(
        `${ENDPOINTS.PAYMENTS.HANDLE_SUCCESS}/${paymentIntentId}`
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