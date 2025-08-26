// This is a server-side file
'use server';

/**
 * @fileOverview A personalized suggestion AI agent based on contact form data.
 *
 * - personalizeSuggestion - A function that takes contact form data and returns a personalized suggestion for content to explore.
 * - PersonalizeSuggestionInput - The input type for the personalizeSuggestion function.
 * - PersonalizeSuggestionOutput - The return type for the personalizeSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeSuggestionInputSchema = z.object({
  name: z.string().describe('The name of the user.'),
  email: z.string().email().describe('The email address of the user.'),
  message: z.string().describe('The message from the user.'),
  interest: z.string().describe('The area of interest that the user specified.'),
});
export type PersonalizeSuggestionInput = z.infer<typeof PersonalizeSuggestionInputSchema>;

const PersonalizeSuggestionOutputSchema = z.object({
  suggestion: z.string().describe('A personalized suggestion for what content to explore next on the website.'),
});
export type PersonalizeSuggestionOutput = z.infer<typeof PersonalizeSuggestionOutputSchema>;

export async function personalizeSuggestion(input: PersonalizeSuggestionInput): Promise<PersonalizeSuggestionOutput> {
  return personalizeSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeSuggestionPrompt',
  input: {schema: PersonalizeSuggestionInputSchema},
  output: {schema: PersonalizeSuggestionOutputSchema},
  prompt: `Based on the user's interest and message, suggest a relevant page on the website to explore.
  
  User Name: {{{name}}}
  Interest: {{{interest}}}
  Message: {{{message}}}
  `,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
    ]
  }
});

const personalizeSuggestionFlow = ai.defineFlow(
  {
    name: 'personalizeSuggestionFlow',
    inputSchema: PersonalizeSuggestionInputSchema,
    outputSchema: PersonalizeSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
