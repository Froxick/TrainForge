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
    
    if (!data.name || data.name.trim() === '') {
      throw new Error('Name is required');
    }
    
    console.log('Creating exercise with:', data);
    console.log('Name value:', `"${data.name}"`);
    console.log('Name length:', data.name.length);
    console.log('Name trimmed:', `"${data.name.trim()}"`);
    
    try {
      
      await db.runAsync(
        `INSERT INTO ExerciseCatalog (id, name, tags, description, rating, createdByUser)
        VALUES ($id, $name, $tags, $description, $rating, $createdByUser)`,
        {
          $id: nanoid(),
          $name: data.name.trim(),
          $tags: data.tags || null,
          $description: data.description ?? null,
          $rating: data.rating ?? 0,
          $createdByUser: 1,
        }
      );
      console.log('Exercise created successfully');
    } catch (error: any) {
      console.error('SQL error details:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      throw error;
    }
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
