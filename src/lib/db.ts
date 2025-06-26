import { ProductProps } from "@/types/product";
import { Pool } from "pg";

const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5433"),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

export async function getProducts(): Promise<ProductProps[]> {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "SELECT * FROM Products ORDER BY id DESC"
    );
    return result.rows;
  } finally {
    client.release();
  }
}

export async function getProductById(id: number): Promise<ProductProps | null> {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM Products WHERE id = $1", [
      id,
    ]);
    return result.rows[0] || null;
  } finally {
    client.release();
  }
}
