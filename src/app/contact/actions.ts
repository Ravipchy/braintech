
"use server";

import { z } from 'zod';

const meetingFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  datetime: z.date({ required_error: "Please select a date and time." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function scheduleMeeting(data: z.infer<typeof meetingFormSchema>): Promise<{ success?: boolean; error?: string }> {
    const parsedData = meetingFormSchema.safeParse(data);

    if (!parsedData.success) {
        const errors = parsedData.error.issues.map(issue => issue.message).join(' ');
        return { error: `Invalid data provided. ${errors}` };
    }

    try {
        // Here you would typically save the data to a database and/or send an email notification.
        // For example: await db.collection('meetings').add(parsedData.data);
        // Or: await sendMeetingRequestEmail(parsedData.data);
        console.log("New meeting scheduled:", parsedData.data);
        
        return { success: true };
    } catch (error) {
        console.error("Error scheduling meeting:", error);
        return { error: "Sorry, we couldn't schedule your meeting at this time. Please try again later." };
    }
}
