import { ComboboxOption } from "../_components/ui/combobox";
// import { DataTable } from "../_components/ui/data-table";
import { getProducts } from "../_data-access/product/get-products";
import CreateSaleButton from "./_components/create-sale-button";
// import { productTableColumns } from "../products/_components/table-columns";

const SalesPage = async () => {
  const products = await getProducts();
  const productOptions: ComboboxOption[] = products.map((product) => ({
    label: product.name,
    value: product.id,
  }));
  return (
    <div className="m-8 my-8 w-full space-y-8 rounded-lg bg-white p-8 px-8">
      {/* ESQUERDA */}
      <div className="items-cente flex w-full justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de Vendas
          </span>
          <h2 className="text-xl font-semibold">Produtos</h2>
        </div>
        {/* DIREITA */}
        <CreateSaleButton products={products} productOptions={productOptions} />
      </div>
      {/* <DataTable columns={productTableColumns} data={products} /> */}
    </div>
  );
};

export default SalesPage;
