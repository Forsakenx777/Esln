export interface Tournament {
  id: string;
  title: string;
  game: string;
  prize: string;
  date: string;
  registrationOpen: boolean;
  image: string;
  googleFormLink: string;
  venue: string;
  organizer: string;
  description: string;
  rules?: string[];
  schedule?: {
    phase: string;
    date: string;
    details: string;
  }[];
  requirements?: string[];
}