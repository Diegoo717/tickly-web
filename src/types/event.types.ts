import { type DateTime } from '../components/events/eventCard/EventCard';
export interface Event {
  eventId: string; 
  title: string;
  description: string;
  place: string;
  date: string;
  time: string;
  cost: number;
  source: string;
  imageUrl: string;
}

export interface SearchEventsDTO {
  description: string;
}

export interface TransformedEvent{
  eventId: string; 
  title: string;
  description: string;
  place: string;
  dateTime: DateTime;
  date: string; 
  time: string;
  cost: number;
  source: string;
  imageUrl: string;
}

