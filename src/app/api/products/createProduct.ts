import { api } from "@/services/api";


export const createProduct = async (
  companyId: number,
  name: string,
  description: string,
  category: string,
  price: string,
  stock: string,
  avatar: File | null,
  subcategory_id: number | null
): Promise<void> => {

  try {

    const formData = new FormData();
    if (avatar) formData.append("avatar", avatar); 
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("stock", stock.toString());
    formData.append("subcategory_id", subcategory_id?.toString() || "");

    await api.post("/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        company_id: companyId,
      },
    });
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    throw new Error("Erro ao criar produto. Tente novamente mais tarde.");
  }
};
