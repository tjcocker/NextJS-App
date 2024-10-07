import { db } from '@vercel/postgres';

const client = await db.connect();

async function deleteUsers() {
    await client.sql`DELETE FROM invoices`;

}

export async function GET() {

    try {
      await client.sql`BEGIN`;
      await deleteUsers();
      await client.sql`COMMIT`;
  
      return Response.json({ message: 'Database deleted successfully, click the Back button on your browser' });
    } catch (error) {
      await client.sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
  }