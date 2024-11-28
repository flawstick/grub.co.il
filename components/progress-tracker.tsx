import { Check } from "lucide-react";

interface ProgressTrackerProps {
  steps: string[];
  currentStep: number;
}

export function ProgressTracker({ steps, currentStep }: ProgressTrackerProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index < currentStep
                ? "bg-[#FD8000] text-white"
                : index === currentStep
                ? "bg-[#FFA500] text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {index < currentStep ? (
              <Check className="w-5 h-5" />
            ) : (
              <span>{index + 1}</span>
            )}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`h-1 w-12 mx-2 ${
                index < currentStep ? "bg-[#FD8000]" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
