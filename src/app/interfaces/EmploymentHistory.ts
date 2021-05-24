import { Country } from "./Country";

export interface EmploymentHistory {
  id: number,
  user_id: number,
  company: string,
  title: string,
  country: Country,
  start_date: Date,
  end_date: Date,
  description: string,
}