import { NextResponse } from "next/server";
import pool from "../../../lib/db";

export async function GET(req: Request) {
  try {
    // leer query params
    const { searchParams } = new URL(req.url);
    const wallet = searchParams.get("wallet");

    if (!wallet) {
      return NextResponse.json(
        { ok: false, error: "Falta el parámetro wallet" },
        { status: 400 }
      );
    }

    const client = await pool.connect();
    const result = await client.query(
      `SELECT producto, SUM(cantidad) AS total_cantidad
       FROM sales
       WHERE wallet = $1
       GROUP BY producto`,
      [wallet]
    );
    client.release();

    return NextResponse.json({ ok: true, data: result.rows });
  } catch (err: any) {
    console.error("Error en GET /api/getQuantityProd:", err);
    return NextResponse.json(
      { ok: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}