
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { verifyCertificate } from "@/app/verify-certificate/actions";
import type { Certificate } from "@/app/verify-certificate/actions";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Loader2, ShieldCheck, ShieldX, Download, FileWarning } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Link from "next/link";

const formSchema = z.object({
  certificateNumber: z.string().min(1, { message: "Certificate Number is required." }),
  dob: z.date({ required_error: "A date of birth is required." }),
});

type FormData = z.infer<typeof formSchema>;

export function CertificateVerificationForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ certificate?: Certificate; error?: string } | null>(null);
  const [showForm, setShowForm] = useState(true);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      certificateNumber: "",
    },
  });

  async function onSubmit(data: FormData) {
    setLoading(true);
    setResult(null);
    const verificationResult = await verifyCertificate(data);
    setResult(verificationResult);
    if (verificationResult.certificate) {
      setShowForm(false);
    }
    setLoading(false);
  }

  const handleReset = () => {
    form.reset();
    setResult(null);
    setShowForm(true);
  }

  const resultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };
  
  const shakeVariants = {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 }
    }
  }

  return (
    <Card className="overflow-hidden">
      <AnimatePresence mode="wait">
        {showForm ? (
        <motion.div key="form" initial="visible" exit="exit" variants={resultVariants}>
          <CardHeader>
            <CardTitle>Verify Certificate</CardTitle>
            <CardDescription>Enter the certificate details to verify its authenticity.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="certificateNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Certificate Number</FormLabel>
                      <FormControl>
                        <Input placeholder="BTT-CERT-12345" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date of Birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1930-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <AnimatePresence mode="wait">
                  {result?.error && (
                    <motion.div variants={shakeVariants} animate="shake">
                        <div className="flex items-center gap-2 text-sm font-medium text-destructive">
                           <ShieldX className="h-4 w-4" />
                           <p>{result.error}</p>
                        </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <Button type="submit" disabled={loading} className="w-full relative overflow-hidden group">
                  <span className="absolute w-full h-full bg-primary/20 left-0 top-0 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300"></span>
                  <span className="relative flex items-center">
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      "Verify"
                    )}
                  </span>
                </Button>
              </form>
            </Form>
          </CardContent>
        </motion.div>
        ) : result?.certificate ? (
          <motion.div key="success" initial="hidden" animate="visible" exit="exit" variants={resultVariants}>
            <CardHeader className="bg-green-50 dark:bg-green-900/20">
              <div className="flex items-center gap-3">
                 <ShieldCheck className="w-10 h-10 text-green-600" />
                 <div>
                    <CardTitle className="text-green-700 dark:text-green-400">Certificate Verified</CardTitle>
                    <CardDescription className="text-green-600 dark:text-green-500">This certificate is authentic and valid.</CardDescription>
                 </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
               <div>
                  <h4 className="text-sm font-semibold text-muted-foreground">RECIPIENT NAME</h4>
                  <p className="text-lg font-medium">{result.certificate.name}</p>
               </div>
               <div>
                  <h4 className="text-sm font-semibold text-muted-foreground">COURSE COMPLETED</h4>
                  <p className="text-lg font-medium">{result.certificate.course}</p>
               </div>
               <div>
                  <h4 className="text-sm font-semibold text-muted-foreground">DATE OF ISSUE</h4>
                  <p className="text-lg font-medium">{format(new Date(result.certificate.issuedDate), "MMMM dd, yyyy")}</p>
               </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground">CERTIFICATE NO.</h4>
                  <p className="text-lg font-medium">{result.certificate.certificateNumber}</p>
               </div>
               <div className="flex flex-col sm:flex-row gap-4 pt-4">
                 <Button asChild className="w-full">
                   <Link href={result.certificate.downloadURL} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2"/> Download Certificate
                   </Link>
                 </Button>
                 <Button onClick={handleReset} variant="outline" className="w-full">Verify Another</Button>
               </div>
            </CardContent>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Card>
  );
}
