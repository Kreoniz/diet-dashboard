"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

interface WeightWidgetProps {
  min: number;
  max: number;
  current: number;
  unit?: string;
}

export function WeightWidget({
  min,
  max,
  current,
  unit = "kg",
}: WeightWidgetProps) {
  // Generate ruler marks
  const marks = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  return (
    <Card>
      <CardHeader className="mb-2">
        <CardTitle>Вес</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full overflow-visible">
          {/* Ruler */}
          <div className="flex justify-between w-full h-2 bg-muted rounded-full relative">
            {marks.map((mark) => (
              <div
                key={mark}
                className="absolute h-2 w-px bg-border"
                style={{ left: `${((mark - min) / (max - min)) * 100}%` }}
              >
                {/* Labels for major marks */}
                {mark % 5 === 0 && (
                  <span className="absolute top-3 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground">
                    {mark}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Current Value Marker */}
          <div
            className="absolute bottom-0 h-4 w-1 bg-primary rounded-full z-10"
            style={{
              left: `${((current - min) / (max - min)) * 100}%`,
              transform: "translateX(-50%)",
            }}
          >
            <span className="font-semibold absolute text-nowrap bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-primary">
              {current} {unit}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="mt-2 text-sm text-muted-foreground">
        Ваш текущий вес {current} {unit}. Для выполнения ваших целей, стремитесь
        держаться ближе к {min} {unit}.
      </CardFooter>
    </Card>
  );
}
