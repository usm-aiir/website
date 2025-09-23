import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Director, Student, Alumni, Publication, Project, ResearchArea, NewsItem } from '@/types';
import directorData from '../../data/people/director.json';
import currentStudentsData from '../../data/people/students.json';
import alumniData from '../../data/people/alumni.json';
import publicationsData from '../../data/publications/publications.json';
import currentProjectsData from '../../data/projects/current.json';
import completedProjectsData from '../../data/projects/completed.json';
import researchAreasData from '../../data/home/focus.json';
import recentNewsData from '../../data/home/news.json';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Type-safe data loaders
export const loadDirector = (): Director => directorData as Director;

export const loadCurrentStudents = (): Student[] => currentStudentsData as Student[];

export const loadAlumni = (): Alumni[] => alumniData as Alumni[];

export const loadPublications = (): Publication[] => publicationsData as Publication[];

export const loadCurrentProjects = (): Project[] => currentProjectsData as Project[];

export const loadCompletedProjects = (): Project[] => completedProjectsData as Project[];

export const loadResearchAreas = (): ResearchArea[] => researchAreasData as ResearchArea[];

export const loadRecentNews = (): NewsItem[] => recentNewsData as NewsItem[];

// Computed data functions
export const getPublicationsByYear = (publications: Publication[]) => {
  return publications.reduce(
    (acc, pub) => {
      acc[pub.year] = (acc[pub.year] || 0) + 1;
      return acc;
    },
    {} as Record<number, number>
  );
};

export const getPublicationYears = (publications: Publication[]) => {
  const years = Array.from(new Set(publications.map(pub => pub.year))).sort((a, b) => b - a);
  return ['all', ...years];
};
