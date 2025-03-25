"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  {
    day: "Понедельник",
    protein: Math.floor(Math.random() * 100) + 50, // 50-150g
    fats: Math.floor(Math.random() * 60) + 30, // 30-90g
    carbohydrates: Math.floor(Math.random() * 200) + 100, // 100-300g
  },
  {
    day: "Вторник",
    protein: Math.floor(Math.random() * 100) + 50,
    fats: Math.floor(Math.random() * 60) + 30,
    carbohydrates: Math.floor(Math.random() * 200) + 100,
  },
  {
    day: "Среда",
    protein: Math.floor(Math.random() * 100) + 50,
    fats: Math.floor(Math.random() * 60) + 30,
    carbohydrates: Math.floor(Math.random() * 200) + 100,
  },
  {
    day: "Четверг",
    protein: Math.floor(Math.random() * 100) + 50,
    fats: Math.floor(Math.random() * 60) + 30,
    carbohydrates: Math.floor(Math.random() * 200) + 100,
  },
  {
    day: "Пятница",
    protein: Math.floor(Math.random() * 100) + 50,
    fats: Math.floor(Math.random() * 60) + 30,
    carbohydrates: Math.floor(Math.random() * 200) + 100,
  },
  {
    day: "Суббота",
    protein: Math.floor(Math.random() * 100) + 50,
    fats: Math.floor(Math.random() * 60) + 30,
    carbohydrates: Math.floor(Math.random() * 200) + 100,
  },
  {
    day: "Воскресенье",
    protein: Math.floor(Math.random() * 100) + 50,
    fats: Math.floor(Math.random() * 60) + 30,
    carbohydrates: Math.floor(Math.random() * 200) + 100,
  },
];

const chartConfig = {
  protein: {
    label: "белки",
  },
  fats: {
    label: "жиры",
  },
  carbohydrates: {
    label: "углеводы",
  },
} satisfies ChartConfig;

export function CaloriesIntakeWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Статискика калорий</CardTitle>
        <CardDescription>текущая неделя</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[250px] w-full" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="carbohydrates"
              stackId="a"
              fill="#84b9c6" // Fresh green
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="protein"
              stackId="a"
              fill="#8af294" // Deep periwinkle
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="fats"
              stackId="a"
              fill="#e1e82a" // Salmon orange
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">Вы - молодец!</div>
        <div className="leading-none text-muted-foreground">
          (Продолжайте в том же духе)
        </div>
      </CardFooter>
    </Card>
  );
}
