
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { formatInTimeZone } from 'date-fns-tz';

// Define the validation schema for the request body
const meetingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  datetime: z.date({ coerce: true }).refine(date => date >= new Date(), {
    message: "Meeting date must be in the future.",
  }),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedData = meetingSchema.safeParse(body);

    if (!parsedData.success) {
      // If validation fails, return a 400 error with the validation messages
      return NextResponse.json({ message: 'Invalid form data', errors: parsedData.error.flatten().fieldErrors }, { status: 400 });
    }
    
    const { name, email, phone, datetime, message } = parsedData.data;

    // *** DATABASE LOGIC GOES HERE ***
    // 1. Establish a connection to your SQL database.
    //    Make sure to use environment variables for your database credentials.
    //    Example: const db = await connectToDatabase(process.env.DATABASE_URL);
    
    // 2. Use a parameterized query to prevent SQL injection.
    //    The exact syntax will depend on your database driver (e.g., 'mysql2', 'pg').
    /*
    const query = `
      INSERT INTO meetings (name, email, phone, meeting_date, message)
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [name, email, phone || null, datetime, message];
    
    // 3. Execute the query.
    //    const [result] = await db.execute(query, values);
    */

    // For now, we'll simulate a successful insertion.
    console.log('Simulating database insertion with data:', parsedData.data);

    // Return a success response
    return NextResponse.json({ message: 'Your meeting has been scheduled!' }, { status: 201 });

  } catch (error) {
    console.error('API Error:', error);
    // Return a generic server error response
    return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
  }
}
