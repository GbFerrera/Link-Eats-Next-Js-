import { api } from "@/services/api";

export interface Order {
  id: number;
  status: string;
}

export const updateStatus = async (companyId: number, order: Order): Promise<Order> => {
  try {
    const response = await api.patch(
      `/orders/status`,
      {
        id: order.id,
        status: order.status
      },
      {
        headers: {
          company_id: companyId
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao Atualizar status:", error);
    throw new Error("Erro ao Atualizar status. Tente novamente mais tarde.");
  }
};
