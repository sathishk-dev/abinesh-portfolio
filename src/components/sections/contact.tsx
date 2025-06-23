"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MotionWrapper } from "@/components/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, Check, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Randomly succeed or fail
    if (Math.random() > 0.2) {
      setStatus("success");
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      (event.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 3000);
    } else {
      setStatus("error");
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try again.",
      });
      setTimeout(() => setStatus("idle"), 3000);
    }
  };
  
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <MotionWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Have a project in mind or just want to say hi? Feel free to send me a message.
          </p>
        </MotionWrapper>

        <MotionWrapper>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="relative group">
                <Input type="text" id="name" name="name" required className="peer h-12 pt-6" placeholder=" " />
                <Label htmlFor="name" className="absolute top-3 left-3 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-accent group-[:not(:has([placeholder-shown]))]:top-1 group-[:not(:has([placeholder-shown]))]:text-xs">
                  Name
                </Label>
              </div>
              <div className="relative group">
                <Input type="email" id="email" name="email" required className="peer h-12 pt-6" placeholder=" "/>
                <Label htmlFor="email" className="absolute top-3 left-3 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-accent group-[:not(:has([placeholder-shown]))]:top-1 group-[:not(:has([placeholder-shown]))]:text-xs">
                  Email
                </Label>
              </div>
            </div>
            <div className="relative group">
              <Textarea id="message" name="message" required className="peer min-h-[120px] pt-6" placeholder=" " />
              <Label htmlFor="message" className="absolute top-3 left-3 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-accent group-[:not(:has([placeholder-shown]))]:top-1 group-[:not(:has([placeholder-shown]))]:text-xs">
                Message
              </Label>
            </div>
            <div className="text-center">
              <Button type="submit" className="w-40 h-12" disabled={status !== 'idle'}>
                <AnimatePresence mode="wait" initial={false}>
                  {status === "idle" && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                    >
                      Send Message
                    </motion.span>
                  )}
                  {status === "loading" && (
                     <motion.div
                      key="loading"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                     >
                      <Loader2 className="h-6 w-6 animate-spin" />
                     </motion.div>
                  )}
                  {status === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                    >
                      <Check className="h-6 w-6" />
                    </motion.div>
                  )}
                   {status === "error" && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                    >
                      <AlertTriangle className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </form>
        </MotionWrapper>
      </div>
    </section>
  );
}
