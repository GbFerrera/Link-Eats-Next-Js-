import { api } from "@/services/api";

interface Product {
  productId: number;
  productName: string;
  avatarId: string;
  amount: number;
  price: string;
}

interface OrderResponse {
  orderID: string;
  productsInOrder: Product[];
  totalValue: string;
}

export const fetchProductsOrder = async (orderId: string): Promise<OrderResponse> => {
  try {
    const response = await api.get(`/orders/${orderId}`);
    return response.data; 
  } catch (error) {
    console.error("Erro ao buscar produtos do pedido:", error);
    throw new Error("Erro ao buscar produtos do pedido. Tente novamente mais tarde.");
  }
};