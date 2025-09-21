import { NextResponse } from "next/server";
import { Pool } from "pg"; 

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432,
});

export async function POST(req: Request) {
  try {
    const { wallet, producto, cantidad, precio } = await req.json();

    const blobData = JSON.stringify({ wallet, producto, cantidad, precio, fecha: Date.now() });

    
    //celstia
    const celestiaRes = await fetch("http://127.0.0.1:26658", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "blob.Submit",
        params: [
          [
            {
              namespace: "AAAAAAAAAAAAAAAAAAAAAAAAAGZhc3QtY2F0LTM=",
              data: Buffer.from(blobData).toString("base64"),
              share_version: 0,
            },
          ],
          { mode: "BROADCAST_MODE_BLOCK" },
        ],
      }),
    });

    const celestiaResult = await celestiaRes.json();

    //DB
    console.log(blobData);
    /*const client = await pool.connect();
    await client.query(
      `INSERT INTO sales (wallet, producto, cantidad, precio, celestia_height, celestia_commitment)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        wallet,
        producto,
        cantidad,
        precio,
        celestiaResult.result,
        null
      ]
    );
    client.release();*/

    return NextResponse.json({
      ok: true,
      celestia: celestiaResult.result,
    });
    } catch (err: any) {
        console.error("Error en POST /api/sales:", err);
        return NextResponse.json(
        { error: err.message ?? "Error registrando venta" },
        { status: 500 }
        );
    }
}
