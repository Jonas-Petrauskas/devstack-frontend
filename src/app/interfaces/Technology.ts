import { TaggedItem } from "./TaggedItem";

export interface Technology extends TaggedItem {
  path: string;
}

export const defaultTechnology: Technology = {
  id: -1,
  name: '',
  path: '',
}
