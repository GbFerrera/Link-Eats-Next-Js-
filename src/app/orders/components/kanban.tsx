import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import {
  Clock,
  Loader,
  CheckCircle,
  Store,
  ClipboardList,
  ShoppingCart,
  DollarSign,
} from "lucide-react";
import { GoTrash } from "react-icons/go";
import { MdOutlineSportsMotorsports } from "react-icons/md";
import { fetchOrders } from "@/app/api/orders/fetchOrders";
import React, { useEffect, useState } from "react";
import { MdOutlineTableBar } from "react-icons/md";
import { DrawerComponent } from "@/components/drawerComponent";
import { updateStatus } from "@/app/api/orders/updateStatus";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Order {
  id: string;
  content: string;
  status: string;
  client_name: string;
  total_value: number;
  table_number: number;
  delivery: boolean;
  table_id: number | null;
  phone_number: string | null;
  created_at: string;
  updated_at: string;
  address: string;
  productsInOrder: {
    productId: number;
    productName: string;
    avatarId: string;
    amount: number;
    price: string;
  }[];
}
interface OrdersState {
  pendente: Order[];
  preparando: Order[];
  enviado: Order[];
}

type Product = {
  productId: number;
  productName: string;
  avatarId: string;
  amount: number;
  price: string;
};

export function Kanban() {
  const [orders, setOrders] = useState<OrdersState>({
    pendente: [],
    preparando: [],
    enviado: [],
  });
  const [productsOrder, setProductsOrder] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  const onDragEnd = async (result: DropResult) => {
    const { destination, source } = result;

    // Se não houver destino, não faz nada
    if (!destination) return;

    // Se a posição de origem e destino forem iguais, também não faz nada
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Identifica as colunas de origem e destino
    const startColumn = Array.from(
      orders[source.droppableId as keyof OrdersState]
    );
    const finishColumn = Array.from(
      orders[destination.droppableId as keyof OrdersState]
    );

    // Lógica para mover o pedido dentro da mesma coluna
    if (source.droppableId === destination.droppableId) {
      const [movedOrder] = startColumn.splice(source.index, 1);
      startColumn.splice(destination.index, 0, movedOrder);

      setOrders((prevOrders) => ({
        ...prevOrders,
        [source.droppableId]: startColumn,
      }));

      // Converte o id para number antes de passar
      await updateStatus(user.company_id, {
        ...movedOrder,
        id: Number(movedOrder.id), // Garantindo que o id seja um número
        status: mapStatusToEnglish(movedOrder.status), // Garantindo que o status seja em inglês
      });
    } else {
      // Lógica para mover o pedido entre colunas diferentes
      const [movedOrder] = startColumn.splice(source.index, 1);
      finishColumn.splice(destination.index, 0, movedOrder);

      setOrders((prevOrders) => ({
        ...prevOrders,
        [source.droppableId]: startColumn,
        [destination.droppableId]: finishColumn,
      }));

      // Atualiza o status do pedido com base na coluna de destino
      const newStatus = destination.droppableId; // O novo status será o id da coluna de destino
      movedOrder.status = newStatus; // Atualiza o status do pedido

      await updateStatus(user.company_id, {
        ...movedOrder,
        id: Number(movedOrder.id), // Garantindo que o id seja um número
        status: mapStatusToEnglish(newStatus), // Garantindo que o status seja em inglês
      });
    }
  };

  const mapStatusToEnglish = (status: string) => {
    switch (status) {
      case "pendente":
        return "pending";
      case "preparando":
        return "preparing";
      case "enviado":
        return "sent";
      default:
        return status;
    }
  };

  const formatCreatedAt = (createdAt: string) => {
    const [date, time] = createdAt.split(" às ");
    const [day, month] = date.split("/");

    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    const formattedDate = `${day} de ${
      months[parseInt(month) - 1]
    } de 2024 às ${time}`;
    return formattedDate;
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("@linkEats:user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      const loadOrders = async () => {
        try {
          const fetchedOrders = await fetchOrders(user.company_id);

          if (!Array.isArray(fetchedOrders)) {
            throw new Error("Formato inválido de dados retornado.");
          }

          const ordersState = {
            pendente: fetchedOrders
              .filter((order) => order.status === "pending")
              .map((order) => ({
                id: String(order.id),
                content: `${order.client_name}`,
                status: order.status,
                client_name: order.client_name,
                total_value: Number(order.total_value),
                table_number: order.table_number,
                delivery: order.delivery === 1,
                table_id: order.table_id,
                phone_number: order.phone_number,
                created_at: order.created_at,
                updated_at: order.updated_at,
                address: order.address || "", // Agora usa o endereço real ou um valor padrão
                productsInOrder: order.productsInOrder || [], // Preenche com os produtos reais
              })),
            preparando: fetchedOrders
              .filter((order) => order.status === "preparing")
              .map((order) => ({
                id: String(order.id),
                content: `${order.client_name}`,
                status: order.status,
                client_name: order.client_name,
                total_value: Number(order.total_value),
                table_number: order.table_number,
                delivery: order.delivery === 1,
                table_id: order.table_id,
                phone_number: order.phone_number,
                created_at: order.created_at,
                updated_at: order.updated_at,
                address: order.address || "", // Agora usa o endereço real ou um valor padrão
                productsInOrder: order.productsInOrder || [], // Preenche com os produtos reais
              })),
            enviado: fetchedOrders
              .filter((order) => order.status === "sent")
              .map((order) => ({
                id: String(order.id),
                content: `${order.client_name}`,
                status: order.status,
                client_name: order.client_name,
                total_value: Number(order.total_value),
                table_number: order.table_number,
                delivery: order.delivery === 1,
                table_id: order.table_id,
                phone_number: order.phone_number,
                created_at: order.created_at,
                updated_at: order.updated_at,
                address: order.address || "", // Agora usa o endereço real ou um valor padrão
                productsInOrder: order.productsInOrder || [], // Preenche com os produtos reais
              })),
          };

          setOrders(ordersState);
        } catch (error) {
          console.error("Erro ao carregar pedidos no useEffect:", error);
          setError("Erro ao carregar os pedidos. Tente novamente mais tarde.");
        } finally {
          setLoading(false);
        }
      };

      loadOrders();
    }
  }, [user]);

  if (loading) return <p>Carregando pedidos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="w-full md:flex justify-between">
        {Object.keys(orders).map((status) => (
          <Droppable key={status} droppableId={status}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="p-4 rounded-lg m-2 border w-full"
                style={{
                  backgroundColor:
                    status === "pendente"
                      ? "var(--kanban-pendente-bg-light)"
                      : status === "preparando"
                      ? "var(--kanban-preparando-bg-light)"
                      : "var(--kanban-enviado-bg-light)",
                  borderColor:
                    status === "pendente"
                      ? "var(--kanban-pendente-border-light)"
                      : status === "preparando"
                      ? "var(--kanban-preparando-border-light)"
                      : "var(--kanban-enviado-border-light)",
                  boxShadow: "var(--kanban-box-shadow-light)",
                }}
              >
                <div className="flex items-center mb-4">
                  {status === "pendente" && (
                    <Clock className="mr-2 text-red-600" />
                  )}
                  {status === "preparando" && (
                    <Loader className="mr-2 text-yellow-600" />
                  )}
                  {status === "enviado" && (
                    <CheckCircle className="mr-2 text-green-600" />
                  )}
                  <h3 className="font-semibold text-lg">
                    {status.charAt(0).toUpperCase() + status.slice(1)} (
                    {orders[status as keyof OrdersState].length})
                  </h3>
                </div>

                {orders[status as keyof OrdersState].map((order, index) => (
                  <Draggable
                    key={order.id}
                    draggableId={order.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="p-4 mb-4 rounded-lg shadow-md bg-white border border-gray-200 hover:bg-gray-50 hover:cursor-pointer transition-colors"
                      >
                        <div className="flex justify-between mb-2">
                          <span className="font-medium flex gap-2">
                            {order.delivery ? (
                              <MdOutlineSportsMotorsports size={24} />
                            ) : order.table_id === null ? (
                              <Store size={24} />
                            ) : (
                              <MdOutlineTableBar size={24} />
                            )}
                            {order.content}
                          </span>
                          <span className="font-bold text-lg text-gray-900">
                            Nº {order.id}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          <p className="flex items-center justify-between">
                            {order.table_id !== null &&
                              `Mesa: ${order.table_number}`}
                          </p>
                          <p className="text-gray-400 mb-3">
                            {order.created_at}
                          </p>

                          <div className="flex justify-between">
                            <DrawerComponent
                              footerActionsTitle="Editar Pedido"
                              buttonTitle="Detalhes"
                              buttonIcon={<ClipboardList />}
                              buttonVariant={"secondary"}
                              drawerTitle={
                                <div className="flex justify-between w-full">
                                  <div className="flex gap-3 items-center">
                                    <ClipboardList />
                                    Pedido Nº{order.id}
                                  </div>
                                  <AlertDialog>
                                    <AlertDialogTrigger className="flex gap-2">
                                      {" "}
                                      Excluir
                                      <GoTrash />
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                      <AlertDialogHeader>
                                        <AlertDialogTitle>
                                          Tem certeza que deseja excluir o
                                          pedido Nº {order.id} ?
                                        </AlertDialogTitle>
                                        <AlertDialogDescription>
                                          Pense bem antes de agir! Essa ação é
                                          permanente e não poderá ser desfeita.
                                        </AlertDialogDescription>
                                      </AlertDialogHeader>
                                      <AlertDialogFooter>
                                        <AlertDialogCancel>
                                          Cancelar
                                        </AlertDialogCancel>
                                        <AlertDialogAction>
                                          {" "}
                                          Exluir
                                          <GoTrash />
                                        </AlertDialogAction>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>
                                  </AlertDialog>
                                </div>
                              }
                              drawerDescription={formatCreatedAt(
                                order.created_at
                              )}
                            >
                              <div>
                                {order.table_number != null &&
                                  order.table_number !== 0 && (
                                    <h1>Mesa: Nº {order.table_number}</h1>
                                  )}
                                <p>
                                  Telefone:{" "}
                                  {order.phone_number || "Não informado"}
                                </p>
                                <p>
                                  Status:{" "}
                                  {order.status === "pending"
                                    ? "Pendente"
                                    : order.status === "preparing"
                                    ? "Preparando"
                                    : order.status === "sent"
                                    ? "Enviado"
                                    : "Status desconhecido"}
                                </p>
                                {order.address && (
                                  <>
                                    <h2 className="mt-2">
                                      Endereço de entrega:
                                    </h2>
                                    <p>{order.address}</p>
                                  </>
                                )}
                                <h2 className="flex gap-3 my-5 font-bold text-lg">
                                  <ShoppingCart />
                                  Produtos
                                </h2>
                                <ul>
                                  {order.productsInOrder &&
                                  order.productsInOrder.length > 0 ? (
                                    order.productsInOrder.map((product) => (
                                      <li
                                        key={product.productId}
                                        className="mb-2"
                                      >
                                        <div className="flex justify-between items-center">
                                          <div className="flex gap-2 items-center">
                                            <img
                                            className="h-[55px] w-[55px] rounded-full"
                                              src={product.avatarId}
                                              alt={product.productName}
                                            />
                                            <span className="">{product.productName}</span>
                                          </div>
                                          <span>
                                            {product.amount} x R${" "}
                                            {parseFloat(product.price).toFixed(
                                              2
                                            )}
                                          </span>
                                        </div>
                                      </li>
                                    ))
                                  ) : (
                                    <p>Nenhum produto no pedido</p> // Mensagem caso não tenha produtos
                                  )}
                                </ul>
                                {/* Exibe o valor total */}
                                <h2 className="mt-7 flex gap-2 font-bold">
                                  <DollarSign /> Valor Total: R${" "}
                                  {order.total_value.toFixed(2)}
                                </h2>{" "}
                                {/* Corrigido para usar o método toFixed */}
                              </div>
                            </DrawerComponent>

                            <span className="font-bold text-lg text-gray-900">
                              R$ {order.total_value.toFixed(2)}
                            </span>
                          </div>
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
