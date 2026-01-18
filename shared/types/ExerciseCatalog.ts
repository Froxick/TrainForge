export interface IExerciseCatalog {
  id: string;
  name: string;
  tags: string[];
  description?: string;
  rating: number;
  createdByUser: boolean;
}