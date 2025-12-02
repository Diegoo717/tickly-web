import { useState, useEffect } from 'react';
import { eventsService } from '../services/eventsService';
import { type TransformedEvent } from '../types/event.types';
import { type ApiError } from '../types/api.types';

interface UseEventsReturn {
  events: TransformedEvent[] | null;
  loading: boolean;
  error: ApiError | null;
  searchEvents: (description: string) => Promise<void>; 
}

export const useEvents = (initialDescription?: string): UseEventsReturn => {
  const [events, setEvents] = useState<TransformedEvent[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false); 
  const [error, setError] = useState<ApiError | null>(null);

  const searchEvents = async (description: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await eventsService.searchEvents({ description });
      setEvents(data);
    } catch (err: any) {
      const apiError: ApiError = {
        message: err.message || 'Unknown error',
        status: err.status,
      };
      setError(apiError);
      setEvents(null); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialDescription) {
      searchEvents(initialDescription);
    }
  }, []); 

  return {
    events,
    loading,
    error,
    searchEvents, 
  };
};