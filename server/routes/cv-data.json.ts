import {
  professionalSummary,
  experiences,
  projects,
  education,
  awards,
  languages,
  skills
} from '../data/cvData'; // Corrected path
import type { CvData } from '~/utils/types';
import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event): Promise<CvData> => {
  return {
    professionalSummary,
    experiences,
    projects,
    education,
    awards,
    languages,
    skills
  };
});
