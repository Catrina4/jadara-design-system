import "./VerificationStatus.css";

export type VerificationStep =
  | "submitted"
  | "in-review"
  | "approved"
  | "completed";

export interface VerificationStatusProps {
  current: VerificationStep;
}

const steps: {
  id: VerificationStep;
  label: string;
}[] = [
  {
    id: "submitted",
    label: "Submitted",
  },
  {
    id: "in-review",
    label: "Under Review",
  },
  {
    id: "approved",
    label: "Approved",
  },
  {
    id: "completed",
    label: "Completed",
  },
];

export function VerificationStatus({
  current,
}: VerificationStatusProps) {
  const currentIndex = steps.findIndex(
    (step) => step.id === current
  );

  return (
    <div className="jadara-verification">
      {steps.map((step, index) => {
        const completed =
          index <= currentIndex;

        return (
          <div
            key={step.id}
            className="jadara-verification__step"
          >
            <div
              className={`jadara-verification__dot ${
                completed
                  ? "jadara-verification__dot--active"
                  : ""
              }`}
            >
              {completed ? "✓" : ""}
            </div>

            <span>{step.label}</span>

            {index < steps.length - 1 && (
              <div
                className={`jadara-verification__line ${
                  index < currentIndex
                    ? "jadara-verification__line--active"
                    : ""
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}