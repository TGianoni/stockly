import "server-only"; // This is a server component, so we need to import this to use server-only features

import { db } from "@/app/_lib/prisma";

interface SaleProductDto {
  productId: string;
  quantity: number;
  unitPrice: number;
  productName: string;
}

export interface SaleDto {
  id: string;
  productNames: string;
  totalProducts: number;
  totalAmount: number;
  date: Date;
  saleProducts: SaleProductDto[];
}

export const getSales = async (): Promise<SaleDto[]> => {
  const sales = await db.sale.findMany({
    include: {
      saleProducts: {
        include: {
          product: true,
        },
      },
    },
  });
  return sales.map(
    (sale): SaleDto => ({
      id: sale.id,
      productNames: sale.saleProducts
        .map((saleProduct) => saleProduct.product.name)
        .join(" ° "),
      totalProducts: sale.saleProducts.reduce(
        (acc, saleProduct) => acc + saleProduct.quantity,
        0,
      ),
      totalAmount: sale.saleProducts.reduce(
        (acc, saleProduct) =>
          acc + saleProduct.quantity * Number(saleProduct.unitPrice),
        0,
      ),
      date: sale.date,
      saleProducts: sale.saleProducts.map(
        (saleProduct): SaleProductDto => ({
          productId: saleProduct.productId,
          productName: saleProduct.product.name,
          quantity: saleProduct.quantity,
          unitPrice: Number(saleProduct.unitPrice),
        }),
      ),
    }),
  );
};
