
"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from 'react-confetti';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Check } from "lucide-react";


const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  interest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

type FormData = z.infer<typeof contactFormSchema>;

type SubmissionStatus = "idle" | "loading" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const { toast } = useToast();
  const [showConfetti, setShowConfetti] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      interest: "",
      message: "",
    },
  });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    // In a static site, we can't perform server-side form submission.
    // We'll simulate a delay and then show a message.
    setTimeout(() => {
        setStatus("success");
        setShowConfetti(true);
        toast({
          title: "Message Sent! 🚀",
          description: "Thanks for reaching out. We'll get back to you soon!",
        });
        setTimeout(() => {
            setShowConfetti(false);
            setStatus("idle");
            form.reset();
        }, 4000);
    }, 1500);
  };

  const buttonCopy = {
    idle: "Let's Talk 🎤",
    loading: "Submitting...",
    success: "Sent!",
  }

  return (
    <Card>
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} onConfettiComplete={() => setShowConfetti(false)} />}
      <CardHeader>
        <CardTitle>Send us a Message</CardTitle>
        <CardDescription>Fill out your details and we will get back to you.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="interest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Area of Interest <span className="text-muted-foreground">(Optional)</span></FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Web Development" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us how we can help..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={status !== 'idle'} className="w-full relative overflow-hidden">
              <AnimatePresence mode="wait">
                 <motion.span
                    key={status}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center"
                  >
                    {status === 'loading' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {status === 'success' && <Check className="mr-2 h-4 w-4" />}
                    {buttonCopy[status]}
                 </motion.span>
              </AnimatePresence>
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
