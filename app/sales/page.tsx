import { Button } from "../_components/ui/button";
import { ComboboxOption } from "../_components/ui/combobox";
// import { DataTable } from "../_components/ui/data-table";
import { Sheet, SheetTrigger } from "../_components/ui/sheet";
import { getProducts } from "../_data-access/product/get-products";
// import { productTableColumns } from "../products/_components/table-columns";
import UpsertSheetContent from "./_components/upsert-sheet-content";

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
        <Sheet>
          <SheetTrigger asChild>
            <Button>Nova venda</Button>
          </SheetTrigger>
          <UpsertSheetContent
            products={products}
            productOptions={productOptions}
          />
        </Sheet>
      </div>
      {/* <DataTable columns={productTableColumns} data={products} /> */}
    </div>
  );
};

export default SalesPage;
