"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { ScheduleMeetingForm } from "./schedule-meeting-form";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function ScheduleMeetingButton() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onFormSubmit = () => {
    setSubmitted(true);
  }

  const handleReset = () => {
    setSubmitted(false);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <motion.div
            initial={{ scale: 0, y: 100 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
            className="fixed bottom-6 right-6 z-50"
        >
        <Button
          size="lg"
          className="rounded-full shadow-lg transition-transform hover:scale-110"
        >
          <Calendar className="mr-2 h-5 w-5" />
          Schedule a Meeting
        </Button>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {!submitted ? (
            <>
                <DialogHeader>
                <DialogTitle>Schedule a Meeting with Us</DialogTitle>
                <DialogDescription>
                    Fill out the form below and we'll get back to you to confirm your appointment.
                </DialogDescription>
                </DialogHeader>
                <ScheduleMeetingForm onFormSubmit={onFormSubmit} />
            </>
        ) : (
            <div className="flex flex-col items-center justify-center text-center p-8">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <CheckIcon className="w-10 h-10 text-green-600" />
                    </div>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Thank you!</h3>
                <p className="text-muted-foreground mb-6">Your meeting request has been sent. We will contact you soon to confirm.</p>
                <DialogClose asChild>
                    <Button onClick={handleReset}>Done</Button>
                </DialogClose>
            </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
