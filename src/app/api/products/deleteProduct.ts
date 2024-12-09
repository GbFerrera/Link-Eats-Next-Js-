import { api } from "@/services/api";

export interface Product {
  id: number;
}

export const deleteProduct = async (product_id:number): Promise<Product[]> => {
  try {
    const response = await api.delete(`/products/${product_id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar produto:", error);
    throw new Error("Erro ao deletar produto. Tente novamente mais tarde.");
  }
};
