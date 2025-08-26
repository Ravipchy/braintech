
"use server";

import { personalizeSuggestion } from '@/ai/flows/personalize-suggestions';
import type { PersonalizeSuggestionInput, PersonalizeSuggestionOutput } from '@/ai/flows/personalize-suggestions';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  interest: z.string(),
  message: z.string(),
});

export async function getPersonalizedSuggestion(data: PersonalizeSuggestionInput): Promise<{ suggestion?: PersonalizeSuggestionOutput; error?: string }> {
  const parsedData = formSchema.safeParse(data);

  if (!parsedData.success) {
    return { error: "Invalid data provided. Please check the form and try again." };
  }

  try {
    const result = await personalizeSuggestion(parsedData.data);
    
    // Here you would typically also trigger an email notification
    // e.g. await sendContactEmail(parsedData.data);
    
    return { suggestion: result };
  } catch (error) {
    console.error("Error in getPersonalizedSuggestion action:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { error: `Sorry, we couldn't process your request at this time. Reason: ${errorMessage}` };
  }
}


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
