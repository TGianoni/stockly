import {
  CircleDollarSign,
  DollarSign,
  PackageIcon,
  ShoppingBasketIcon,
} from "lucide-react";
import Header, {
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./_components/summary-card";
import { getTotalInStock } from "../_data-access/dashboard/get-total-in-stock";
import { getTotalSales } from "../_data-access/dashboard/get-total-sales";
import { getTotalProducts } from "../_data-access/dashboard/get-total-products";
import { getTodayRevenue } from "../_data-access/dashboard/get-today-revenue";
import { getTotalRevenue } from "../_data-access/dashboard/get-total-revenue";
import { formatCurrency } from "../_helpers/currency";
import ReveneuChart from "./_components/reveneu-chart";
import { getLast14DaysRevenue } from "../_data-access/dashboard/get-last-14-days-reveneu";

const Home = async () => {
  const [
    totalInStock,
    totalSales,
    totalProducts,
    todayReveneu,
    totalReveneu,
    totalLast14DaysReveneu,
  ] = await Promise.all([
    getTotalInStock(),
    getTotalSales(),
    getTotalProducts(),
    getTodayRevenue(),
    getTotalRevenue(),
    getLast14DaysRevenue(),
  ]);
  return (
    <div className="m-8 flex w-full flex-col space-y-8 rounded-lg">
      <Header>
        <HeaderLeft>
          <HeaderTitle>Dashboard</HeaderTitle>
          <HeaderSubtitle>Visão geral dos dados</HeaderSubtitle>
        </HeaderLeft>
      </Header>

      <div className="grid grid-cols-2 gap-6">
        <SummaryCard>
          <SummaryCardIcon>
            <DollarSign />
          </SummaryCardIcon>
          <SummaryCardTitle>Receita Total</SummaryCardTitle>
          <SummaryCardValue>{formatCurrency(totalReveneu)}</SummaryCardValue>
        </SummaryCard>

        <SummaryCard>
          <SummaryCardIcon>
            <DollarSign />
          </SummaryCardIcon>
          <SummaryCardTitle>Receita Hoje</SummaryCardTitle>
          <SummaryCardValue>{formatCurrency(todayReveneu)}</SummaryCardValue>
        </SummaryCard>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard>
          <SummaryCardIcon>
            <CircleDollarSign />
          </SummaryCardIcon>
          <SummaryCardTitle>Vendas Totais</SummaryCardTitle>
          <SummaryCardValue>{totalSales}</SummaryCardValue>
        </SummaryCard>
        <SummaryCard>
          <SummaryCardIcon>
            <PackageIcon />
          </SummaryCardIcon>
          <SummaryCardTitle>Total em Estoque</SummaryCardTitle>
          <SummaryCardValue>{totalInStock}</SummaryCardValue>
        </SummaryCard>
        <SummaryCard>
          <SummaryCardIcon>
            <ShoppingBasketIcon />
          </SummaryCardIcon>
          <SummaryCardTitle>Produtos</SummaryCardTitle>
          <SummaryCardValue>{totalProducts}</SummaryCardValue>
        </SummaryCard>
      </div>

      <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white p-6">
        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500 bg-opacity-10">
          <DollarSign className="text-emerald-500" />
        </div>
        <p className="text-lg font-semibold text-slate-900">Receita</p>
        <p className="text-sm text-slate-400">Últimos 14 dias</p>
        <ReveneuChart data={totalLast14DaysReveneu} />
      </div>
    </div>
  );
};

export default Home;
