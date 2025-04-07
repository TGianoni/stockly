import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import { getProducts } from "../_data-access/product/get-products";
import AddProductButton from "./_components/add-product-button";

export const dynamic = "force-dynamic"; // This page will always be revalidated on every request

const ProductsPage = async () => {
  const products = await getProducts();

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
        <AddProductButton />
      </div>
      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
};

export default ProductsPage;
