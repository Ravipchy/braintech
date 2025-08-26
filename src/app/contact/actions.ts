
"use server";

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

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
        await addDoc(collection(db, "meetings"), {
            ...parsedData.data,
            createdAt: Timestamp.now(),
        });
        console.log("New meeting scheduled:", parsedData.data);
        
        return { success: true };
    } catch (error) {
        console.error("Error scheduling meeting:", error);
        return { error: "Sorry, we couldn't schedule your meeting at this time. Please try again later." };
    }
}

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  interest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export async function submitContactForm(data: z.infer<typeof contactFormSchema>): Promise<{ success?: boolean; error?: string }> {
    const parsedData = contactFormSchema.safeParse(data);

    if (!parsedData.success) {
        const errors = parsedData.error.issues.map(issue => issue.message).join(' ');
        return { error: `Invalid data provided. ${errors}` };
    }

    try {
        await addDoc(collection(db, "contacts"), {
            ...parsedData.data,
            createdAt: Timestamp.now(),
        });
        console.log("New contact form submission:", parsedData.data);
        return { success: true };
    } catch (error) {
        console.error("Error adding document: ", error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
        return { error: `Something went wrong. Please try again. Error: ${errorMessage}` };
    }
}
