import { api } from "@/services/api";

export interface Product {
  id: number;
  company_id: number;
  avatar: string;
  name: string;
  price: string;
  category: string;
  stock: number;
  description: string;
  created_at: string;
  updated_at: string;
  subcategory_id: number | null;
  subcategory_name: string | null;
}

export const fetchProducts = async (companyId: number): Promise<Product[]> => {
  try {
    const response = await api.get("/products", {
      headers: {
        company_id: companyId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw new Error("Erro ao buscar produtos. Tente novamente mais tarde.");
  }
};
