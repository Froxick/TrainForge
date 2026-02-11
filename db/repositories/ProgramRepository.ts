import * as SQLite from "expo-sqlite";
import { nanoid } from "nanoid/non-secure";

import { database } from "../schemaDb";
import { EntityStatusProgram,Program } from "../type";

export const ProgramRepository = {

  
  getAll: async (): Promise<Program[]> => {
    try {
      const db = (database as any).db as SQLite.SQLiteDatabase;

      const tableExists = await db.getFirstAsync<{ name: string }>(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Program'"
      );

      if (!tableExists) {
        console.warn("Table Program does not exist yet");
        return [];
      }

      return await db.getAllAsync<Program>(
        `SELECT * FROM Program ORDER BY name ASC`
      );
    } catch (error) {
      console.error("Error ProgramRepository.getAll:", error);
      return [];
    }
  },

  getById: async (id: string): Promise<Program | null> => {
    const db = (database as any).db as SQLite.SQLiteDatabase;

    const result = await db.getFirstAsync<Program>(
      `SELECT * FROM Program WHERE id = ?`,
      [id]
    );

    return result ?? null;
  },


  create: async (
    data: Omit<Program, "id" | "status"> & {
      status?: string;
    }
  ): Promise<string> => {

    const db = (database as any).db as SQLite.SQLiteDatabase;

    if (!data.name || data.name.trim() === "") {
      throw new Error("Program name is required");
    }

    const id = nanoid();

    try {
      await db.runAsync(
        `INSERT INTO Program (id, name, description, status)
         VALUES ($id, $name, $description, $status)`,
        {
          $id: id,
          $name: data.name.trim(),
          $description: data.description ?? null,
          $status: data.status ?? EntityStatusProgram.NotStarted,
        }
      );

      return id;
    } catch (error) {
      console.error("Error ProgramRepository.create:", error);
      throw error;
    }
  },

 
  update: async (
    id: string,
    data: Partial<Program>
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
      `UPDATE Program SET ${fields.join(", ")} WHERE id = ?`,
      [...values, id]
    );
  },

  delete: async (id: string): Promise<void> => {
    const db = (database as any).db as SQLite.SQLiteDatabase;

    await db.runAsync(
      `DELETE FROM Program WHERE id = ?`,
      [id]
    );
  },
};
