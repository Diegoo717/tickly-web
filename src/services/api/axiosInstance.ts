import axios, {
  type AxiosInstance,
  AxiosError,
  type InternalAxiosRequestConfig,
  type AxiosResponse,
} from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 40000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log("Request:", config.method?.toUpperCase(), config.url);
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log("Response:", response.status, response.config.url);
    return response;
  },
  (error: AxiosError) => {
    let errorMessage = error.message; 

    if (error.code === "ECONNABORTED" || error.message.includes("timeout")) {
      errorMessage = "Maximum request time reached. Please try again.";
    } else if (error.response) {
      console.error(
        "Response Error:",
        error.response.status,
        error.response.data
      );
      if (error.response.status === 401) {
        errorMessage = "Session expired. Please log in again.";
      } else if (error.response.status === 404) {
        errorMessage = "Resource not found.";
      } else if (error.response.status >= 500) {
        errorMessage = "Server error. Please try again later.";
      }
    } else if (error.request) {
      console.error("Request Error:", error.request);
      errorMessage = "No response from server. Check your connection.";
    } else {
      console.error("Error:", error.message);
    }

    
    const customError = new Error(errorMessage);
    Object.assign(customError, {
      originalError: error,
      code: error.code,
      response: error.response,
      request: error.request,
      isAxiosError: true,
    });

    return Promise.reject(customError);
  }
);

export default apiClient;
