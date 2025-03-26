import { WeightWidget } from "@/components/weight-widget";
import { WaterIntakeWidget } from "@/components/water-intake-widget";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <WeightWidget min={70} max={100} current={87} unit="кг" />

      <WaterIntakeWidget current={1.2} target={3} />

      <div className="col-span-full @5xl:col-span-2">
        <ChartAreaInteractive />
      </div>
    </div>
  );
}
