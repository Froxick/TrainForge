
import { database } from '@/db/schemaDb';
import { DEFAULT_EXERCISES } from '../constants/defaultExercises';
import { SQLiteDatabase } from 'expo-sqlite';

export const seedExerciseCatalog = async () => {
   const db = (database as any).db as SQLiteDatabase;

  if (!db) {
    throw new Error('Database not initialized');
  }


  const result = await db.getFirstAsync<{ count: number }>(
    `SELECT COUNT(*) as count FROM ExerciseCatalog`
  );

  if (result && result.count > 0) {
    return;
  }

  for (const ex of DEFAULT_EXERCISES) {
    await db.runAsync(
      `
      INSERT INTO ExerciseCatalog 
      (id, name, tags, description, rating, createdByUser)
      VALUES (?, ?, ?, ?, ?, ?)
      `,
      [
        ex.id,
        ex.name,
        JSON.stringify(ex.tags), 
        ex.description ?? null,
        ex.rating ?? 0,
        ex.createdByUser ? 1 : 0,
      ]
    );
  }

  console.log('Exercise catalog seeded');
   
}