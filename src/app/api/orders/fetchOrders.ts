import { api } from "@/services/api";


export interface Order {
  id: number;
  company_id: number;
  status: string;
  client_name: string;
  total_value: number;
  address: string | null;
  created_at: string;
  updated_at: string;
  phone_number: string | null;
  delivery: number;
  table_id: number;
  payment: number;
  command_id: number;
  table_number: number;
}

export const fetchOrders = async (companyId: number): Promise<Order[]> => {
  try {
    const response = await api.get(`/orders/show/${companyId}`);
    return response.data; 
  } catch (error) {
    console.error("Erro ao buscar pedidos:", error);
    throw new Error("Erro ao buscar pedidos. Tente novamente mais tarde.");
  }
};