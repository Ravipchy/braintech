
"use client";

import { useState } from "react";
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
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject must be at least 2 characters."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

type FormData = z.infer<typeof contactFormSchema>;

type SubmissionStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const { toast } = useToast();
  const [showConfetti, setShowConfetti] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: FormData) {
    setStatus("loading");

    const formData = new FormData();
    formData.append("access_key", "b9ba25db-cd72-4fb6-8820-1d613f55e7b3");
    formData.append("name", data.name);
    formData.append("email", data.email);
    if(data.phone) formData.append("phone", data.phone);
    formData.append("subject", data.subject);
    formData.append("message", data.message);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();

        if (result.success) {
            setStatus("success");
            setShowConfetti(true);
            toast({
              title: "✅ Message sent successfully!",
              description: "Thanks for reaching out. We'll get back to you soon!",
            });
            setTimeout(() => {
                setShowConfetti(false);
                setStatus("idle");
                form.reset();
            }, 4000);
        } else {
            setStatus("error");
            toast({
              variant: "destructive",
              title: "❌ Failed to send message.",
              description: result.message || "Please try again later.",
            });
            setTimeout(() => setStatus("idle"), 3000);
        }
    } catch (error) {
        setStatus("error");
        toast({
            variant: "destructive",
            title: "❌ Failed to send message.",
            description: "An unexpected error occurred. Please try again later.",
        });
        setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const buttonCopy = {
    idle: "Send Message",
    loading: "Sending...",
    success: "Sent!",
    error: "Try Again",
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
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number <span className="text-muted-foreground">(Optional)</span></FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Project Inquiry" {...field} />
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
            <Button type="submit" disabled={status !== 'idle' && status !== 'error'} className="w-full relative overflow-hidden">
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
