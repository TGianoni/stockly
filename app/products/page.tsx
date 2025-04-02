import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";

const ProductsPage = async () => {
  const products = await db.product.findMany({});
  return (
    <div className="m-8 my-8 w-full space-y-8 rounded-lg bg-white p-8 px-8">
      {/* ESQUERDA */}
      <div className="items-cente flex w-full justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de Produtos
          </span>
          <h2 className="text-xl font-semibold">Produtos</h2>
        </div>
        {/* DIREITA */}
        <Button className="gap-2">
          <PlusIcon size={20}></PlusIcon>Novo produto
        </Button>
      </div>
      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
};

export default ProductsPage;
