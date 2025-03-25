"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const description = "An interactive area chart";

const sleepData = [
  { date: "2024-04-01", sleep: 7.5 },
  { date: "2024-04-02", sleep: 8.2 },
  { date: "2024-04-03", sleep: 6.8 },
  { date: "2024-04-04", sleep: 7.1 },
  { date: "2024-04-05", sleep: 6.5 },
  { date: "2024-04-06", sleep: 9.0 },
  { date: "2024-04-07", sleep: 7.8 },
  { date: "2024-04-08", sleep: 6.9 },
  { date: "2024-04-09", sleep: 8.5 },
  { date: "2024-04-10", sleep: 7.3 },
  { date: "2024-04-11", sleep: 6.7 },
  { date: "2024-04-12", sleep: 8.1 },
  { date: "2024-04-13", sleep: 7.6 },
  { date: "2024-04-14", sleep: 6.4 },
  { date: "2024-04-15", sleep: 8.3 },
  { date: "2024-04-16", sleep: 7.0 },
  { date: "2024-04-17", sleep: 6.9 },
  { date: "2024-04-18", sleep: 8.4 },
  { date: "2024-04-19", sleep: 7.2 },
  { date: "2024-04-20", sleep: 6.8 },
  { date: "2024-04-21", sleep: 8.0 },
  { date: "2024-04-22", sleep: 7.5 },
  { date: "2024-04-23", sleep: 6.6 },
  { date: "2024-04-24", sleep: 8.2 },
  { date: "2024-04-25", sleep: 7.4 },
  { date: "2024-04-26", sleep: 6.9 },
  { date: "2024-04-27", sleep: 8.1 },
  { date: "2024-04-28", sleep: 7.3 },
  { date: "2024-04-29", sleep: 6.7 },
  { date: "2024-04-30", sleep: 8.5 },
  { date: "2024-05-01", sleep: 7.0 },
  { date: "2024-05-02", sleep: 6.8 },
  { date: "2024-05-03", sleep: 8.3 },
  { date: "2024-05-04", sleep: 7.6 },
  { date: "2024-05-05", sleep: 6.9 },
  { date: "2024-05-06", sleep: 8.2 },
  { date: "2024-05-07", sleep: 7.1 },
  { date: "2024-05-08", sleep: 6.5 },
  { date: "2024-05-09", sleep: 8.4 },
  { date: "2024-05-10", sleep: 7.3 },
  { date: "2024-05-11", sleep: 6.7 },
  { date: "2024-05-12", sleep: 8.0 },
  { date: "2024-05-13", sleep: 7.5 },
  { date: "2024-05-14", sleep: 6.8 },
  { date: "2024-05-15", sleep: 8.1 },
  { date: "2024-05-16", sleep: 7.2 },
  { date: "2024-05-17", sleep: 6.9 },
  { date: "2024-05-18", sleep: 8.3 },
  { date: "2024-05-19", sleep: 7.4 },
  { date: "2024-05-20", sleep: 6.7 },
  { date: "2024-05-21", sleep: 8.2 },
  { date: "2024-05-22", sleep: 7.0 },
  { date: "2024-05-23", sleep: 6.8 },
  { date: "2024-05-24", sleep: 8.5 },
  { date: "2024-05-25", sleep: 7.3 },
  { date: "2024-05-26", sleep: 6.9 },
  { date: "2024-05-27", sleep: 8.1 },
  { date: "2024-05-28", sleep: 7.2 },
  { date: "2024-05-29", sleep: 6.7 },
  { date: "2024-05-30", sleep: 8.4 },
  { date: "2024-05-31", sleep: 7.5 },
  { date: "2024-06-01", sleep: 6.8 },
  { date: "2024-06-02", sleep: 8.3 },
  { date: "2024-06-03", sleep: 7.1 },
  { date: "2024-06-04", sleep: 6.9 },
  { date: "2024-06-05", sleep: 8.2 },
  { date: "2024-06-06", sleep: 7.4 },
  { date: "2024-06-07", sleep: 6.7 },
  { date: "2024-06-08", sleep: 8.0 },
  { date: "2024-06-09", sleep: 7.3 },
  { date: "2024-06-10", sleep: 6.8 },
  { date: "2024-06-11", sleep: 8.5 },
  { date: "2024-06-12", sleep: 7.2 },
  { date: "2024-06-13", sleep: 6.9 },
  { date: "2024-06-14", sleep: 8.1 },
  { date: "2024-06-15", sleep: 7.0 },
  { date: "2024-06-16", sleep: 6.7 },
  { date: "2024-06-17", sleep: 8.4 },
  { date: "2024-06-18", sleep: 7.3 },
  { date: "2024-06-19", sleep: 6.8 },
  { date: "2024-06-20", sleep: 8.2 },
  { date: "2024-06-21", sleep: 7.1 },
  { date: "2024-06-22", sleep: 6.9 },
  { date: "2024-06-23", sleep: 8.3 },
  { date: "2024-06-24", sleep: 7.4 },
  { date: "2024-06-25", sleep: 6.7 },
  { date: "2024-06-26", sleep: 8.0 },
  { date: "2024-06-27", sleep: 7.2 },
  { date: "2024-06-28", sleep: 6.8 },
  { date: "2024-06-29", sleep: 8.5 },
  { date: "2024-06-30", sleep: 7.3 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
    color: "var(--primary)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("90d");

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  const filteredData = sleepData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Сон</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">Последние 3 месяца</span>
          <span className="@[540px]/card:hidden">Последние 3 месяца</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem className="cursor-pointer" value="90d">
              Последние 3 месяца
            </ToggleGroupItem>
            <ToggleGroupItem className="cursor-pointer" value="30d">
              Последние 30 дней
            </ToggleGroupItem>
            <ToggleGroupItem className="cursor-pointer" value="7d">
              Последние 7 дней
            </ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Последние 3 месяца
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Последние 30 дней
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Последние 7 дней
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[150px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("ru-RU", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              defaultIndex={isMobile ? -1 : 10}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("ru-RU", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="sleep"
              type="natural"
              stroke="var(--color-mobile)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
