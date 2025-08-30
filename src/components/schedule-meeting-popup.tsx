
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon, CheckCircle, Loader2 } from "lucide-react";


const meetingFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(1, { message: "Phone number is required." }),
  datetime: z.date({ required_error: "Please select a date and time." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof meetingFormSchema>;

interface ScheduleMeetingPopupProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ScheduleMeetingPopup({ isOpen, onOpenChange }: ScheduleMeetingPopupProps) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(meetingFormSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  async function onSubmit(data: FormData) {
    setLoading(true);
    
    const formData = new FormData();
    formData.append("access_key", "b9ba25db-cd72-4fb6-8820-1d613f55e7b3");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("meeting_date", format(data.datetime, 'yyyy-MM-dd'));
    formData.append("message", data.message);
    formData.append("subject", `New Meeting Request from ${data.name}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "✅ Meeting request submitted successfully!",
          description: "We'll be in touch soon to confirm your appointment.",
        });
        form.reset();
        onOpenChange(false);
      } else {
        toast({
          variant: "destructive",
          title: "❌ Submission failed.",
          description: result.message || "Please try again later.",
        });
      }
    } catch (error) {
       toast({
          variant: "destructive",
          title: "❌ Submission failed.",
          description: "An unexpected error occurred. Please try again later.",
        });
    } finally {
      setLoading(false);
    }
  }

  const handleClose = (open: boolean) => {
    if (!open) {
      form.reset();
    }
    onOpenChange(open);
  }

  const slideUpVariant = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
      exit: { opacity: 0, y: 50, transition: { duration: 0.3, ease: "easeInOut" } }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-[480px] p-0" >
          <AnimatePresence mode="wait">
            <motion.div key="form" variants={slideUpVariant} initial="hidden" animate="visible" exit="exit">
                <DialogHeader className="p-6 pb-4">
                    <DialogTitle>Schedule a Meeting with Us</DialogTitle>
                    <DialogDescription>
                        Fill out the form below and we'll get back to you to confirm your appointment.
                    </DialogDescription>
                </DialogHeader>
                <div className="px-6 pb-6">
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
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
                            <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl><Input type="tel" placeholder="(123) 456-7890" {...field} /></FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="datetime"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                            <FormLabel>Preferred Date & Time</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                    variant={"outline"}
                                    className={cn("pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                                    >
                                    {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))}
                                    initialFocus
                                />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Message / Project Details</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder="Please provide any details about your project or what you'd like to discuss."
                                className="min-h-[100px]"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <DialogFooter>
                            <Button type="submit" disabled={loading} className="w-full">
                                {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Submitting...
                                </>
                                ) : (
                                "Submit Request"
                                )}
                            </Button>
                        </DialogFooter>
                    </form>
                    </Form>
                </div>
            </motion.div>
           </AnimatePresence>
        </DialogContent>
    </Dialog>
  );
}
