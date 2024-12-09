import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { Clock, Loader, CheckCircle } from "lucide-react";
import { fetchOrders } from "@/app/api/orders/fetchOrders"; 

interface Order {
  id: string;
  content: string;
  status: string;
  client_name: string;
  total_value: number;
  table_number: number;
}

interface OrdersState {
  pendente: Order[];
  preparando: Order[];
  enviado: Order[];
}

export function Kanban() {
  const [orders, setOrders] = useState<OrdersState>({
    pendente: [],
    preparando: [],
    enviado: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null); // Use state to set user

  useEffect(() => {
    const storedUser = localStorage.getItem("@linkEats:user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Only set the user from localStorage after rendering on client
    }
  }, []);

  useEffect(() => {
    if (user) {
      const loadOrders = async () => {
        try {
          const fetchedOrders = await fetchOrders(user.company_id);
          const organizedOrders: OrdersState = {
            pendente: fetchedOrders
              .filter((order) => order.status === "pending")
              .map((order) => ({
                id: String(order.id),
                content: `${order.client_name} - R$ ${order.total_value.toFixed(2)}`,
                status: order.status,
                client_name: order.client_name,
                total_value: order.total_value,
                table_number: order.table_number,
              })),
            preparando: fetchedOrders
              .filter((order) => order.status === "preparing")
              .map((order) => ({
                id: String(order.id),
                content: `${order.client_name} - R$ ${order.total_value.toFixed(2)}`,
                status: order.status,
                client_name: order.client_name,
                total_value: order.total_value,
                table_number: order.table_number,
              })),
            enviado: fetchedOrders
              .filter((order) => order.status === "sent")
              .map((order) => ({
                id: String(order.id),
                content: `${order.client_name} - R$ ${order.total_value.toFixed(2)}`,
                status: order.status,
                client_name: order.client_name,
                total_value: order.total_value,
                table_number: order.table_number,
              })),
          };
          setOrders(organizedOrders);
        } catch (err) {
          setError("Erro ao carregar os pedidos. Tente novamente mais tarde.");
        } finally {
          setLoading(false);
        }
      };

      loadOrders();
    }
  }, [user]); // This effect will run when `user` is set

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) return;

    if (destination.droppableId !== source.droppableId || destination.index !== source.index) {
      const startColumn = [...orders[source.droppableId as keyof OrdersState]];
      const finishColumn = [...orders[destination.droppableId as keyof OrdersState]];

      const [movedOrder] = startColumn.splice(source.index, 1);
      finishColumn.splice(destination.index, 0, movedOrder);

      setOrders((prevOrders) => ({
        ...prevOrders,
        [source.droppableId]: startColumn,
        [destination.droppableId]: finishColumn,
      }));
    }
  };

  if (loading) return <p>Carregando pedidos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="w-full md:flex justify-between">
        {Object.keys(orders).map((status) => (
          <Droppable
            key={status}
            droppableId={status}
            isDropDisabled={false}
            direction="vertical"
            isCombineEnabled={true}
            ignoreContainerClipping={true}
          >
            {(provided) => (
              <div
                ref={provided.innerRef}
                className="p-4 rounded-lg m-2 border w-full"
                style={{
                  backgroundColor:
                    status === "pendente"
                      ? "#f8d7da"
                      : status === "preparando"
                      ? "#fff3cd"
                      : "#d4edda",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex items-center mb-4">
                  {status === "pendente" && <Clock className="mr-2 text-red-600" />}
                  {status === "preparando" && <Loader className="mr-2 text-yellow-600" />}
                  {status === "enviado" && <CheckCircle className="mr-2 text-green-600" />}
                  <h3 className="font-semibold text-lg">
                    {status.charAt(0).toUpperCase() + status.slice(1)} (
                    {orders[status as keyof OrdersState].length})
                  </h3>
                </div>

                {orders[status as keyof OrdersState].map((order, index) => (
                  <Draggable key={order.id} draggableId={order.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="p-4 mb-4 rounded-lg shadow-md bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{order.content}</span>
                          <span className="font-bold text-lg text-gray-900">
                            R$ {order.total_value.toFixed(2)}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          <p>Cliente: {order.client_name}</p>
                          <p>Mesa: {order.table_number}</p>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}
