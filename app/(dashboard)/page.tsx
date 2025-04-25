import Header, {
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";
import { getMostSoldProducts } from "../_data-access/dashboard/get-most-sold-products";
import MostSoldProductItem from "./_components/most-sold-product-item";
import TotalReveneuCard from "./_components/total-reveneu-card";
import { Suspense } from "react";
import { Skeleton } from "../_components/ui/skeleton";
import TodayReveneuCard from "./_components/today-reveneu-card";
import TotalSalesCard from "./_components/total-sales-card";
import TotalInStockCard from "./_components/total-in-stock-card";
import TotalProductsCard from "./_components/total-products-card";
import TotalLast14DaysReveneuCard from "./_components/total-last-14days-reveneu-card";

const Home = async () => {
  const [mostSoldProducts] = await Promise.all([getMostSoldProducts()]);
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
        <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white">
          <p className="p-6 text-lg font-semibold text-slate-900">
            Produtos mais vendidos
          </p>
          <div className="space-y-7 overflow-y-auto px-6 pb-6">
            {mostSoldProducts.map((product) => (
              <MostSoldProductItem key={product.productId} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
