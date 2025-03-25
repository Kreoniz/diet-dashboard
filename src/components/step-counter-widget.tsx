"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface StepCounterProps {
  currentSteps: number;
  dailyGoal: number;
}

export function StepCounter({
  currentSteps = 7850,
  dailyGoal = 10000,
}: StepCounterProps) {
  const progressPercentage = Math.min((currentSteps / dailyGoal) * 100, 100);
  const remainingSteps = dailyGoal - currentSteps;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Шагомер</CardTitle>
      </CardHeader>

      <CardContent>
        {/* Прогресс-бар */}
        <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
          {/* Пройденные шаги */}
          <div
            className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />

          {/* Оставшиеся шаги */}
          <div
            className="absolute top-0 h-full bg-gray-300"
            style={{
              left: `${progressPercentage}%`,
              width: `${100 - progressPercentage}%`,
            }}
          />

          {/* Текст внутри бара */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold text-white">
              {currentSteps.toLocaleString()} / {dailyGoal.toLocaleString()}{" "}
              шагов
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between text-sm">
        <span className="text-green-600">
          Пройдено: {currentSteps.toLocaleString()} шагов
        </span>
        {remainingSteps > 0 && (
          <span className="text-gray-500">
            Осталось: {remainingSteps.toLocaleString()} шагов
          </span>
        )}
      </CardFooter>
    </Card>
  );
}
