import Header, {
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";
import TotalReveneuCard from "./_components/total-reveneu-card";
import { Suspense } from "react";
import { Skeleton } from "../_components/ui/skeleton";
import TodayReveneuCard from "./_components/today-reveneu-card";
import TotalSalesCard from "./_components/total-sales-card";
import TotalInStockCard from "./_components/total-in-stock-card";
import TotalProductsCard from "./_components/total-products-card";
import TotalLast14DaysReveneuCard from "./_components/total-last-14days-reveneu-card";
import MostSoldProductsCard from "./_components/most-sold-products-card";

const Home = async () => {
  return (
    <div className="m-8 flex w-full flex-col space-y-8 rounded-lg">
      <Header>
        <HeaderLeft>
          <HeaderTitle>Dashboard</HeaderTitle>
          <HeaderSubtitle>Visão geral dos dados</HeaderSubtitle>
        </HeaderLeft>
      </Header>

      <div className="grid grid-cols-2 gap-6">
        <Suspense
          fallback={<Skeleton className="rounded-xl bg-white bg-opacity-75" />}
        >
          <TotalReveneuCard />
        </Suspense>

        <Suspense
          fallback={<Skeleton className="rounded-xl bg-white bg-opacity-75" />}
        >
          <TodayReveneuCard />
        </Suspense>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Suspense
          fallback={<Skeleton className="rounded-xl bg-white bg-opacity-75" />}
        >
          <TotalSalesCard />
        </Suspense>

        <Suspense
          fallback={<Skeleton className="rounded-xl bg-white bg-opacity-75" />}
        >
          <TotalInStockCard />
        </Suspense>

        <Suspense
          fallback={<Skeleton className="rounded-xl bg-white bg-opacity-75" />}
        >
          <TotalProductsCard />
        </Suspense>
      </div>

      <div className="grid min-h-0 grid-cols-[minmax(0,2.5fr),minmax(0,1fr)] gap-6">
        <Suspense
          fallback={<Skeleton className="rounded-xl bg-white bg-opacity-75" />}
        >
          <TotalLast14DaysReveneuCard />
        </Suspense>
        <Suspense
          fallback={<Skeleton className="rounded-xl bg-white bg-opacity-75" />}
        >
          <MostSoldProductsCard />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
