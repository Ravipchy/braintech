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
    return { error: "Sorry, we couldn't process your request at this time. Please try again later." };
  }
}


const scheduleMeetingSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  preferredDate: z.date(),
  message: z.string().min(10, "Message must be at least 10 characters.").optional(),
});

export async function scheduleMeeting(data: unknown): Promise<{ success?: boolean; error?: string }> {
  const parsedData = scheduleMeetingSchema.safeParse(data);
  if(!parsedData.success) {
    const issues = parsedData.error.issues.map(issue => issue.message).join(' ');
    return { error: `Invalid data provided. ${issues}` };
  }

  // Here you would typically send an email or create a calendar event
  console.log("New Meeting Scheduled:", parsedData.data);

  // Simulate a successful submission
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true };
}
