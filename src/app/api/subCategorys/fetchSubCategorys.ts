import { api } from "@/services/api";

import { Subcategory } from "@/types/Subcategory";

export const fetchSubCategorys = async (companyId: number): Promise<Subcategory[]> => {
  try {
    const response = await api.get("/subcategory", {
      headers: {
        company_id: companyId,
      },
    });

    return response.data 
  } catch (error) {
    console.error("Erro ao buscar subcategorias:", error);
    throw new Error("Erro ao buscar subcategorias. Tente novamente mais tarde.");
  }
};
