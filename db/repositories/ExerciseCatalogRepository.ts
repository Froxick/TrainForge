import * as SQLite from 'expo-sqlite';
import { nanoid } from 'nanoid/non-secure';


import { database } from '../schemaDb';
import { ExerciseCatalog } from '../type';

export const ExerciseCatalogRepository = {
  getAll: async (): Promise<ExerciseCatalog[]> => {
    try {
      const db = (database as any).db as SQLite.SQLiteDatabase;
      
      
      const tableExists = await db.getFirstAsync<{ name: string }>(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='ExerciseCatalog'"
      );
      
      if (!tableExists) {
        console.warn('Table ExerciseCatalog does not exist yet');
        return []; 
      }
      
      const result = await db.getAllAsync<ExerciseCatalog>(
        `SELECT * FROM ExerciseCatalog ORDER BY rating DESC`
      );
      return result;
    } catch (error) {
      console.error('Error in getAll:', error);
      return []; 
    }
  },

  getById: async (id: string): Promise<ExerciseCatalog | null> => {
    const db = (database as any).db as SQLite.SQLiteDatabase;
    const result = await db.getFirstAsync<ExerciseCatalog>(
      `SELECT * FROM ExerciseCatalog WHERE id = ?`,
      [id]
    );
    return result ?? null;
  },

  create: async (
    data: Omit<ExerciseCatalog, 'id' | 'createdByUser'>
    ): Promise<void> => {
    const db = (database as any).db as SQLite.SQLiteDatabase;

    await db.runAsync(
        `
        INSERT INTO ExerciseCatalog
        (id, name, tags, description, rating, createdByUser)
        VALUES (?, ?, ?, ?, ?, ?)
        `,
        {
        1: nanoid(),
        2: data.name,
        3: data.tags ? JSON.stringify(data.tags) : null,
        4: data.description ?? null,
        5: data.rating ?? 0,
        6: 1,
        }
    );
    },


  update: async (
    id: string,
    data: Partial<ExerciseCatalog>
  ): Promise<void> => {
    const db = (database as any).db as SQLite.SQLiteDatabase;

    const fields: string[] = [];
    const values: any[] = [];

    for (const [key, value] of Object.entries(data)) {
      fields.push(`${key} = ?`);
      values.push(value);
    }

    if (fields.length === 0) return;

    await db.runAsync(
      `UPDATE ExerciseCatalog SET ${fields.join(', ')} WHERE id = ?`,
      [...values, id]
    );
  },

  delete: async (id: string): Promise<void> => {
    const db = (database as any).db as SQLite.SQLiteDatabase;
    await db.runAsync(`DELETE FROM ExerciseCatalog WHERE id = ?`, [id]);
  },
};
