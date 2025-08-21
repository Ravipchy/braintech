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
