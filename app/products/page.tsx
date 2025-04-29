import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
// import { cachedGetProducts } from "../_data-access/product/get-products";
import AddProductButton from "./_components/create-product-button";
import Header, {
  HeaderLeft,
  HeaderRight,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";
import { getProducts } from "../_data-access/product/get-products";

export const dynamic = "force-dynamic"; // This page will always be revalidated on every request

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="m-8 my-8 w-full space-y-8 overflow-auto rounded-lg bg-white p-8 px-8">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Gestão de Produtos</HeaderSubtitle>
          <HeaderTitle>Produtos</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <AddProductButton />
        </HeaderRight>
      </Header>
      {/* ESQUERDA */}
      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
};

export default ProductsPage;
