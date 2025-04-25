import { DollarSign } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";
import { formatCurrency } from "@/app/_helpers/currency";
import { getTodayRevenue } from "@/app/_data-access/dashboard/get-today-revenue";

const TodayReveneuCard = async () => {
  const todayReveneu = await getTodayRevenue();
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <DollarSign />
      </SummaryCardIcon>
      <SummaryCardTitle>Receita Hoje</SummaryCardTitle>
      <SummaryCardValue>{formatCurrency(todayReveneu)}</SummaryCardValue>
    </SummaryCard>
  );
};

export default TodayReveneuCard;
