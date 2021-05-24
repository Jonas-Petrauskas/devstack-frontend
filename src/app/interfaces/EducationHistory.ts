import { Country } from "./Country";

export interface EducationHistory {
  id: number,
  user_id: number,
  institution: string,
  degree: string,
  field: string,
  country: Country,
  start_date: Date,
  end_date: Date,
  description: string,
}
