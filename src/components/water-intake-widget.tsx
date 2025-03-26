"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface WaterIntakeWidgetProps {
  current: number;
  target: number;
  unit?: string;
}

export function WaterIntakeWidget({
  current = 1.3,
  target = 2,
  unit = "литров",
}: WaterIntakeWidgetProps) {
  const percentage = Math.min((current / target) * 100, 100);
  const remaining = target - current;

  return (
    <Card className="w-full relative overflow-hidden pb-0">
      <CardHeader>
        <CardTitle>Потребление воды</CardTitle>
      </CardHeader>

      <CardContent className="mt-auto relative min-h-40 h-full">
        {/* Вода */}
        <div
          className="overflow-hidden rounded-lg absolute bottom-0 left-0 right-0 bg-blue-100 transition-all duration-500"
          style={{
            height: `${percentage}%`,
            background: `linear-gradient(to top, rgba(56, 182, 255, 0.8), rgba(0, 150, 255, 0.9))`,
          }}
        >
          {/* Волны */}
          <div
            className="absolute top-0 left-0 right-0 h-8 bg-blue-100 opacity-50 rounded-full"
            style={{ transform: "translateY(-50%) scale(1.5)" }}
          />
          <div
            className="absolute top-2 left-0 right-0 h-6 bg-blue-100 opacity-30 rounded-full"
            style={{ transform: "translateY(-50%) scale(1.8)" }}
          />
        </div>

        {/* Границы ёмкости */}
        <div className="absolute inset-0 border-4 border-blue-200 rounded-lg pointer-events-none" />

        {/* Показатель */}
        <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full shadow-sm z-10">
          <span className="font-bold">
            {current.toFixed(1)}/{target} {unit}
          </span>
        </div>

        {/* Дополнительная информация */}
        {remaining > 0 && (
          <div className="absolute bottom-4 left-4 right-4 text-center text-sm text-gray-800">
            Осталось выпить: {remaining.toFixed(1)} {unit}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
