export enum EntityStatus {
  NotStarted = "not_started",
  Completed = "completed",
  Failed = "failed",
}

export enum EntityStatusProgram {
     NotStarted = "not_started",
     Completed = "completed",
     Activity = 'activity'
}


 
export interface ExerciseCatalog {
  id: string;
  name: string;
  tags: string;
  description?: string;
  rating: number;
  createdByUser: boolean;
}

export interface Set {
  id: string;
  dayExerciseId: string;
  reps: number;
  weight: number;
  rpe?: number;
  rir?: number;
  status: EntityStatus;
}

export interface DayExercise {
  id: string;
  dayId: string;
  exerciseCatalogId: string;
  status: EntityStatus;
}

export interface Day {
  id: string;
  weekId: string;
  name: string;
  dayIndex: number;
  status: EntityStatusProgram;
  description?: string;
}

export interface Week {
  id: string;
  programId: string;
  name: string;
  weekIndex: number;
  status: EntityStatusProgram;
}

export interface Program {
  id: string;
  name: string;
  description?: string;
  status: EntityStatusProgram;
}