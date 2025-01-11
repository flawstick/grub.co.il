"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { ProgressTracker } from "@/components/progress-tracker";
import {
  Building2,
  UtensilsCrossed,
  ArrowLeft,
  Check,
  Home,
} from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, Clock } from "lucide-react";

const steps = ["Organization Type", "Company Details", "Meeting Preferences"];

export default function BookDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState({
    organizationType: "",
    companyName: "",
    meetingType: "on-location",
    message: "",
    date: undefined as Date | undefined,
    time: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOrganizationTypeSelect = (type: string) => {
    setFormData({ ...formData, organizationType: type });
    setDirection(1);
    setCurrentStep(1);
  };

  const handleCompanyDetailsSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDirection(1);
    setCurrentStep(2);
  };

  const handleMeetingPreferencesSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData);
    toast({
      title: "Demo Requested",
      description: "Thank you for your interest. We'll be in touch soon!",
    });
    setIsSubmitted(true);
  };

  const handleBack = () => {
    setDirection(-1);
    setCurrentStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setFormData({
      organizationType: "",
      companyName: "",
      meetingType: "on-location",
      message: "",
      date: undefined,
      time: "",
    });
    setDirection(-1);
    setCurrentStep(0);
    setIsSubmitted(false);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-[#FD8000] dark:text-[#FFA500]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Book a Demo
      </motion.h1>
      {!isSubmitted && (
        <ProgressTracker steps={steps} currentStep={currentStep} />
      )}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={isSubmitted ? "thank-you" : currentStep}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          {isSubmitted ? (
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block p-4 bg-green-100 rounded-full mb-4"
              >
                <Check className="w-16 h-16 text-green-500" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-2xl font-bold mb-4"
              >
                Thank you for your interest!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mb-8"
              >
                We'll be in touch with you soon to schedule your demo.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex justify-center space-x-4"
              >
                <Button onClick={handleReset}>Book Another Demo</Button>
                <Button asChild variant="outline">
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    Return to Home
                  </Link>
                </Button>
              </motion.div>
            </div>
          ) : currentStep === 0 ? (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-center mb-4">
                I come to you as a...
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card
                  className="cursor-pointer transition-all duration-300 hover:shadow-lg"
                  onClick={() => handleOrganizationTypeSelect("company")}
                >
                  <CardContent className="flex flex-col items-center justify-center h-full p-6">
                    <Building2 className="w-16 h-16 mb-4 text-[#FD8000]" />
                    <h3 className="text-2xl font-semibold mb-2">Company</h3>
                    <p className="text-center text-gray-600">
                      I represent a company looking to improve our meal
                      management
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className="cursor-pointer transition-all duration-300 hover:shadow-lg"
                  onClick={() => handleOrganizationTypeSelect("restaurant")}
                >
                  <CardContent className="flex flex-col items-center justify-center h-full p-6">
                    <UtensilsCrossed className="w-16 h-16 mb-4 text-[#FD8000]" />
                    <h3 className="text-2xl font-semibold mb-2">Restaurant</h3>
                    <p className="text-center text-gray-600">
                      I represent a restaurant interested in partnering with
                      Grub
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : currentStep === 1 ? (
            <form onSubmit={handleCompanyDetailsSubmit} className="space-y-6">
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={handleBack}
                  variant="outline"
                  className="flex items-center"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button
                  type="submit"
                  className="bg-[#FD8000] hover:bg-[#FD8000]/90 dark:bg-[#FFA500] dark:hover:bg-[#FFA500]/90"
                >
                  Next
                </Button>
              </div>
            </form>
          ) : (
            <Card className="p-6">
              <form
                onSubmit={handleMeetingPreferencesSubmit}
                className="space-y-6"
              >
                <Tabs
                  defaultValue="on-location"
                  onValueChange={(value) =>
                    setFormData({ ...formData, meetingType: value })
                  }
                >
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="on-location">On Location</TabsTrigger>
                    <TabsTrigger value="google-meet">Google Meet</TabsTrigger>
                  </TabsList>
                  <TabsContent value="on-location">
                    <p className="text-sm text-gray-500 mt-2">
                      We'll come to your location for the demo.
                    </p>
                  </TabsContent>
                  <TabsContent value="google-meet">
                    <p className="text-sm text-gray-500 mt-2">
                      We'll send you a Google Meet link for the demo.
                    </p>
                  </TabsContent>
                </Tabs>
                <div>
                  <Label htmlFor="message">
                    Tell us more about your needs:
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.date && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.date ? (
                            format(formData.date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.date}
                          onSelect={(date) =>
                            setFormData({ ...formData, date })
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <div className="flex">
                      <Input
                        type="time"
                        id="time"
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                        className="flex-grow"
                        required
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        className="ml-2"
                      >
                        <Clock className="h-4 w-4" />
                        <span className="sr-only">Choose time</span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button
                    type="button"
                    onClick={handleBack}
                    variant="outline"
                    className="flex items-center"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button
                    type="submit"
                    className="bg-[#FD8000] hover:bg-[#FD8000]/90 dark:bg-[#FFA500] dark:hover:bg-[#FFA500]/90"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
