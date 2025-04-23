"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { DayTotalRevenueDto } from "@/app/_data-access/dashboard/get-last-14-days-reveneu";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartConfig: ChartConfig = {
  totalReveneu: {
    label: "Receita",
  },
};

interface ReveneuChartProps {
  data: DayTotalRevenueDto[];
}

const ReveneuChart = ({ data }: ReveneuChartProps) => {
  return (
    <ChartContainer config={chartConfig} className="min-h-0 w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="totalReveneu" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default ReveneuChart;
