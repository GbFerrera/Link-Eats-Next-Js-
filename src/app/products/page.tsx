import { Title } from "@/components/title";
import { DataTable } from "./components/dataTable";
import { NewProduct } from "./components/newProduct";

export default function ProductsPage() {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <Title>Produtos</Title>
          <p>Visão geral dos produtos</p>
        </div>

        <NewProduct />
      </div>
      <DataTable />
    </div>
  );
}
