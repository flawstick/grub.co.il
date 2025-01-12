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
  ArrowRight,
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
import { cn, isRTL } from "@/lib/utils";
import { CalendarIcon, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { useDirection } from "@/hooks/use-direction";

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

  const t = useTranslations("BookDemo");
  const { direction: dir } = useDirection(); // "ltr" or "rtl"
  const isRtl = dir === "rtl";

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

  /**
   * We modify slideVariants to check if we're in RTL mode.
   * If direction > 0 (going forward):
   *  - LTR: slide in from right ("100%") -> center -> slide out to left ("-100%")
   *  - RTL: slide in from left ("-100%") -> center -> slide out to right ("100%")
   * If direction < 0 (going backward), we reverse it.
   */
  const slideVariants = {
    enter: (dirDelta: number) => ({
      x: dirDelta > 0 ? (isRtl ? "-100%" : "100%") : isRtl ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dirDelta: number) => ({
      x: dirDelta > 0 ? (isRtl ? "100%" : "-100%") : isRtl ? "-100%" : "100%",
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
        {t("title")}
      </motion.h1>

      {!isSubmitted && (
        <ProgressTracker
          steps={steps.map((step) => t(`steps.${step}`))}
          currentStep={currentStep}
        />
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
                {t("thankYouTitle")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mb-8"
              >
                {t("thankYouDescription")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex justify-center space-x-4"
              >
                <Button onClick={handleReset}>{t("bookAnotherDemo")}</Button>
                <Button asChild variant="outline">
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    {t("returnToHome")}
                  </Link>
                </Button>
              </motion.div>
            </div>
          ) : currentStep === 0 ? (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-center mb-4">
                {t("organizationTypeTitle")}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card
                  className="cursor-pointer transition-all duration-300 hover:shadow-lg"
                  onClick={() => handleOrganizationTypeSelect("company")}
                >
                  <CardContent className="flex flex-col items-center justify-center h-full p-6">
                    <Building2 className="w-16 h-16 mb-4 text-[#FD8000]" />
                    <h3 className="text-2xl font-semibold mb-2">
                      {t("organizationTypeCompany")}
                    </h3>
                    <p className="text-center text-gray-600">
                      {t("organizationTypeCompanyDescription")}
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className="cursor-pointer transition-all duration-300 hover:shadow-lg"
                  onClick={() => handleOrganizationTypeSelect("restaurant")}
                >
                  <CardContent className="flex flex-col items-center justify-center h-full p-6">
                    <UtensilsCrossed className="w-16 h-16 mb-4 text-[#FD8000]" />
                    <h3 className="text-2xl font-semibold mb-2">
                      {t("organizationTypeRestaurant")}
                    </h3>
                    <p className="text-center text-gray-600">
                      {t("organizationTypeRestaurantDescription")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : currentStep === 1 ? (
            <form onSubmit={handleCompanyDetailsSubmit} className="space-y-6">
              <div>
                <Label htmlFor="companyName">{t("companyNameLabel")}</Label>
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
                  {isRtl ? (
                    <ArrowRight className="mr-2 h-4 w-4" />
                  ) : (
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  )}
                  {t("backButton")}
                </Button>
                <Button
                  type="submit"
                  className="bg-[#FD8000] hover:bg-[#FD8000]/90 dark:bg-[#FFA500] dark:hover:bg-[#FFA500]/90 dark:text-white"
                >
                  {t("nextButton")}
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
                  dir={dir as "ltr" | "rtl"}
                  onValueChange={(value) =>
                    setFormData({ ...formData, meetingType: value })
                  }
                >
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="on-location">
                      {t("onLocation")}
                    </TabsTrigger>
                    <TabsTrigger value="google-meet">
                      {t("googleMeet")}
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="on-location">
                    <p className="text-sm text-gray-500 mt-2">
                      {t("onLocationDescription")}
                    </p>
                  </TabsContent>
                  <TabsContent value="google-meet">
                    <p className="text-sm text-gray-500 mt-2">
                      {t("googleMeetDescription")}
                    </p>
                  </TabsContent>
                </Tabs>
                <div>
                  <Label htmlFor="message">{t("messageLabel")}</Label>
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
                    <Label htmlFor="date">{t("preferredDateLabel")}</Label>
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
                            <span>{t("pickDatePlaceholder")}</span>
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
                    <Label htmlFor="time">{t("preferredTimeLabel")}</Label>
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
                        className="ltr:ml-2 rtl:mr-2"
                      >
                        <Clock className="h-4 w-4" />
                        <span className="sr-only">
                          {t("chooseTimePlaceholder")}
                        </span>
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
                    {isRtl ? (
                      <ArrowRight className="mr-2 h-4 w-4" />
                    ) : (
                      <ArrowLeft className="mr-2 h-4 w-4" />
                    )}
                    {t("backButton")}
                  </Button>
                  <Button
                    type="submit"
                    className="bg-[#FD8000] hover:bg-[#FD8000]/90 dark:bg-[#FFA500] dark:hover:bg-[#FFA500]/90 dark:text-white"
                  >
                    {t("submitButton")}
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
