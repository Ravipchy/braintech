import { CertificateVerificationForm } from "@/components/certificate-verification-form";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certificate Verification',
  description: 'Verify the authenticity of a BrainTech Technology certificate.',
};

export default function VerifyCertificatePage() {
  return (
    <>
      <section className="w-full py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Certificate Verification</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Enter the details below to verify the authenticity of a certificate issued by BrainTech Technology.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <CertificateVerificationForm />
          </div>
        </div>
      </section>
    </>
  );
}
