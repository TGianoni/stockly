import { getLast14DaysRevenue } from "@/app/_data-access/dashboard/get-last-14-days-reveneu";
import ReveneuChart from "./reveneu-chart";

const TotalLast14DaysReveneuCard = async () => {
  const totalLast14DaysReveneu = await getLast14DaysRevenue();
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white p-6">
      <p className="text-lg font-semibold text-slate-900">Receita</p>
      <p className="text-sm text-slate-400">Últimos 14 dias</p>
      <ReveneuChart data={totalLast14DaysReveneu} />
    </div>
  );
};

export default TotalLast14DaysReveneuCard;
