import { DollarSign } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";
import { getTotalRevenue } from "@/app/_data-access/dashboard/get-total-revenue";
import { formatCurrency } from "@/app/_helpers/currency";

const TotalReveneuCard = async () => {
  const totalReveneu = await getTotalRevenue();
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <DollarSign />
      </SummaryCardIcon>
      <SummaryCardTitle>Receita Total</SummaryCardTitle>
      <SummaryCardValue>{formatCurrency(totalReveneu)}</SummaryCardValue>
    </SummaryCard>
  );
};

export default TotalReveneuCard;
