"use server";

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { format } from 'date-fns';

const CertificateSchema = z.object({
  certificateNumber: z.string(),
  name: z.string(),
  dob: z.string(), // Stored as YYYY-MM-DD string
  issuedDate: z.string(),
  course: z.string(),
  status: z.string(),
  downloadURL: z.string().url(),
});

export type Certificate = z.infer<typeof CertificateSchema>;

const formSchema = z.object({
  certificateNumber: z.string().min(1, "Certificate Number is required."),
  dob: z.date({ required_error: "Date of Birth is required." }),
});

export async function verifyCertificate(data: { certificateNumber: string; dob: Date }): Promise<{ certificate?: Certificate; error?: string }> {
  const parsedData = formSchema.safeParse(data);

  if (!parsedData.success) {
    const issues = parsedData.error.issues.map(issue => issue.message).join(' ');
    return { error: `Invalid data provided. ${issues}` };
  }
  
  const { certificateNumber, dob } = parsedData.data;
  const dobString = format(dob, 'yyyy-MM-dd');

  try {
    const certificatesRef = collection(db, "certificates");
    const q = query(
        certificatesRef,
        where("certificateNumber", "==", certificateNumber),
        where("dob", "==", dobString)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return { error: "Invalid Certificate Number or Date of Birth." };
    }

    const doc = querySnapshot.docs[0];
    const certificateData = doc.data();
    
    // Validate with Zod schema
    const validatedCertificate = CertificateSchema.safeParse({
        ...certificateData,
        id: doc.id,
    });

    if (!validatedCertificate.success) {
        console.error("Firestore data validation error:", validatedCertificate.error);
        return { error: "Certificate data is corrupted or invalid." };
    }

    if (validatedCertificate.data.status !== 'valid') {
        return { error: `This certificate is currently ${validatedCertificate.data.status}.` };
    }

    return { certificate: validatedCertificate.data };
  } catch (error) {
    console.error("Error verifying certificate:", error);
    return { error: "An unexpected error occurred. Please try again later." };
  }
}
