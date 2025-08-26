
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Loader2, ShieldX } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  certificateNumber: z.string().min(1, { message: "Certificate Number is required." }),
  dob: z.date({ required_error: "A date of birth is required." }),
});

type FormData = z.infer<typeof formSchema>;

export function CertificateVerificationForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      certificateNumber: "",
    },
  });

  async function onSubmit(data: FormData) {
    setLoading(true);
    // In a static site, we can't perform server-side verification.
    // We'll simulate a delay and then show a message.
    setTimeout(() => {
        toast({
            variant: "destructive",
            title: "Verification Unavailable",
            description: "Certificate verification requires a server and is not available in this static version of the site.",
        });
        setLoading(false);
    }, 1000);
  }

  return (
    <Card className="overflow-hidden">
        <motion.div key="form">
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
    </Card>
  );
}
