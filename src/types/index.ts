// TypeScript interfaces for lab data

export interface Person {
  name: string;
  title?: string;
  level?: string;
  year?: string;
  image: string;
  email: string;
  bio?: string;
  research?: string;
  interests?: string[];
}

export interface Director extends Person {
  title: string;
  bio: string;
  interests: string[];
}

export interface Student extends Person {
  level: string;
  year: string;
  research: string;
}

export interface Alumni extends Person {
  degree: string;
  graduationYear: number;
  currentPosition: string;
  work?: string;
}

export interface Publication {
  title: string;
  authors: string[];
  year: number;
  venue: string;
  abstract: string;
  doi?: string;
  pdfUrl?: string;
}

export interface Project {
  title: string;
  description: string;
  funding?: string;
  duration: string;
  team: string[];
  githubUrl?: string;
  paperUrl?: string;
}

export interface ResearchArea {
  icon: string;
  title: string;
  description: string;
}

export interface NewsItem {
  date: string;
  title: string;
  description: string;
  badge: string;
}
