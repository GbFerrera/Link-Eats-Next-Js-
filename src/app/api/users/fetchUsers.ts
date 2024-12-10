import { api } from "@/services/api";


export const fetchUsers = async (company_id: number) => {
  try {
    const response = await api.get("/users", {
      headers: {
        company_id
      },
    });

    return response.data
  } catch (error) {
    console.error("Erro ao buscar usuários", error);
    throw new Error("Erro ao buscar usuários. Tente novamente mais tarde.");
  }
};
