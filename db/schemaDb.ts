import { EntityStatus, EntityStatusProgram } from "./type";
import * as SQLite from 'expo-sqlite';

export class TrainForgeDatabase {
  private db: SQLite.SQLiteDatabase | null = null;

  async initialize(): Promise<void> {
    try {
      this.db = SQLite.openDatabaseSync('trainforge.db');
      await this.createTables();
      console.log('Database initialized successfully');
    } catch (error) {
      console.error('Failed to initialize database:', error);
      throw error;
    }
  }

  private async createTables(): Promise<void> {
    if (!this.db) throw new Error('Database not initialized');

    await this.db.execAsync(`
      PRAGMA foreign_keys = ON;
      PRAGMA journal_mode = WAL;
    `);

    await this.db.execAsync(`
      CREATE TABLE IF NOT EXISTS ExerciseCatalog (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        tags TEXT,
        description TEXT,
        rating INTEGER DEFAULT 0,
        createdByUser INTEGER DEFAULT 0
      );

      CREATE TABLE IF NOT EXISTS Program (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        status TEXT DEFAULT '${EntityStatusProgram.NotStarted}'
      );

      CREATE TABLE IF NOT EXISTS Week (
        id TEXT PRIMARY KEY,
        programId TEXT NOT NULL,
        name TEXT NOT NULL,
        weekIndex INTEGER NOT NULL,
        status TEXT DEFAULT '${EntityStatusProgram.NotStarted}',
        FOREIGN KEY (programId) REFERENCES Program(id) ON DELETE CASCADE
      );

      CREATE TABLE IF NOT EXISTS Day (
        id TEXT PRIMARY KEY,
        weekId TEXT NOT NULL,
        name TEXT NOT NULL,
        dayIndex INTEGER NOT NULL,
        status TEXT DEFAULT '${EntityStatusProgram.NotStarted}',
        description TEXT,
        FOREIGN KEY (weekId) REFERENCES Week(id) ON DELETE CASCADE
      );

      CREATE TABLE IF NOT EXISTS DayExercise (
        id TEXT PRIMARY KEY,
        dayId TEXT NOT NULL,
        exerciseCatalogId TEXT NOT NULL,
        status TEXT DEFAULT '${EntityStatus.NotStarted}',
        FOREIGN KEY (dayId) REFERENCES Day(id) ON DELETE CASCADE,
        FOREIGN KEY (exerciseCatalogId) REFERENCES ExerciseCatalog(id)
      );

      CREATE TABLE IF NOT EXISTS ExerciseSet (
        id TEXT PRIMARY KEY,
        dayExerciseId TEXT NOT NULL,
        reps INTEGER NOT NULL,
        weight REAL NOT NULL,
        rpe REAL,
        rir REAL,
        status TEXT DEFAULT '${EntityStatus.NotStarted}',
        FOREIGN KEY (dayExerciseId) REFERENCES DayExercise(id) ON DELETE CASCADE
      );
    `);

   
    await this.db.execAsync(`
      CREATE INDEX IF NOT EXISTS idx_week_programId ON Week(programId);
      CREATE INDEX IF NOT EXISTS idx_day_weekId ON Day(weekId);
      CREATE INDEX IF NOT EXISTS idx_dayExercise_dayId ON DayExercise(dayId);
      CREATE INDEX IF NOT EXISTS idx_ExerciseSet_dayExerciseId ON ExerciseSet(dayExerciseId);
    `);
  }
}
export const database = new TrainForgeDatabase()