"use client";

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Clock, Loader, CheckCircle } from 'lucide-react'; // Importando os ícones do Lucide

// Exemplo de dados de pedidos
const initialOrders = {
  pending: [
    { id: '1', content: 'Pedido 1' },
    { id: '2', content: 'Pedido 2' },
  ],
  preparing: [
    { id: '3', content: 'Pedido 3' },
  ],
  shipped: [
    { id: '4', content: 'Pedido 4' },
  ],
};



export function Kanban() {
  const [orders, setOrders] = useState(initialOrders);

  const onDragEnd = (result) => {
    const { destination, source } = result;

    // Se não houver um destino, não faz nada
    if (!destination) {
      return;
    }

    // Se a ordem não mudar, não faz nada
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Mover o pedido de uma coluna para outra
    const startColumn = orders[source.droppableId];
    const finishColumn = orders[destination.droppableId];

    // Remover o pedido da coluna original
    const [movedOrder] = startColumn.splice(source.index, 1);

    // Adicionar o pedido na nova coluna na posição desejada
    finishColumn.splice(destination.index, 0, movedOrder);

    // Atualizar o estado
    setOrders({
      ...orders,
      [source.droppableId]: startColumn,
      [destination.droppableId]: finishColumn,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="w-full md:flex justify-between  ">
        {Object.keys(orders).map((status) => (
          <Droppable key={status} droppableId={status} direction="vertical">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`p-4 rounded-lg m-2 border w-full`}
              >
                <div className="flex items-center mb-2">
                  {status === 'pending' && <Clock className="mr-2 text-red-600" />}
                  {status === 'preparing' && <Loader className="mr-2 text-yellow-600" />}
                  {status === 'shipped' && <CheckCircle className="mr-2 text-green-600" />}
                  <h3 className="font-semibold text-lg">
                    {status.charAt(0).toUpperCase() + status.slice(1)} ({orders[status].length}) 
                  </h3>
                </div>
                {orders[status].map((order, index) => (
                  <Draggable key={order.id} draggableId={order.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`p-4 mb-2 rounded-lg shadow-md`}
                      >
                        {order.content}
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
