"use client";

import * as React from "react";
import { SelectComponent } from "@/components/selectComponent";
import { DrawerComponent } from "@/components/drawerComponent";
import { InputWithLabel } from "@/components/inputWithLabel";
import { MdOutlineSportsMotorsports } from "react-icons/md";
import { DataTableComponent } from "@/components/dataTable";
import { Calendar } from "@/components/ui/calendar";
import { MdOutlineTableBar } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { SheetDemo } from "./components/test";
import { ToastDemo } from "./components/cart";
import { DateRange } from "react-day-picker";
import { Kanban } from "./components/kanban";
import { Title } from "@/components/title";
import { addDays, format } from "date-fns";
import { cn } from "@/lib/utils";


import {
  Calendar as CalendarIcon, 
  Drill, 
  Receipt, 
  Store,
  ListFilter,
  ClipboardList,
} from "lucide-react";


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";



export default function OrdersPage() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2024, 0, 20),
    to: addDays(new Date(2024, 0, 20), 20),
  });

  return (
    <div>
      <div className="flex align-center flex-col lg:justify-between lg:flex-row mb-10">
        <div>
          <Title>Pedidos</Title>
          <p className="">Visão geral dos pedidos</p>
        </div>
        <Popover>
          <PopoverTrigger className="rounded-xl" asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-[300px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Escolha a data</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>

      <p className="flex gap-3 text-lg font-bold mb-2">
        <ListFilter size={20} />
        Filtros
      </p>

      <div className="flex flex-col gap-3 items-center mb-4 md:items-start md:flex-row justify-between">
        <div className="flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="hover:cursor-pointer" variant="outline">
                  Todos
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delivery / Balção / Mesas</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">
                  <Store /> / <MdOutlineTableBar />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Balção / Mesas</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">
                  <MdOutlineSportsMotorsports />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delivery</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <DrawerComponent
          buttonTitle="Novo Pedido"
          drawerTitle={
            <>
              <ClipboardList />
              Novo pedido
            </>
          }
          drawerDescription="Detalhes do novo pedido"
          footerActionsTitle="Criar Pedido"
        >
          <section className="flex gap-4 mb-3">
            <InputWithLabel
              label="Cliente"
              id="nome"
              placeholder="Digite o nome do cliente"
              type="text"
            />
            <SelectComponent
              label="Entrega"
              labelGroup="Tipos de entrega"
              triggerWidth="full"
              placeholder="Selecione o tipo"
              options={[
                {
                  value: "delivery",
                  label: "Delivery",
                  icon: <MdOutlineSportsMotorsports size={16} />,
                },
                { value: "store", label: "Balção", icon: <Store size={16} /> },
                {
                  value: "table",
                  label: "Mesa",
                  icon: <MdOutlineTableBar size={16} />,
                },
              ]}
            />
          </section>

          <InputWithLabel
            label="Telefone para contato"
            id="nome"
            placeholder="(62) 9 1234-8765"
            type="phone"
          />

          <section className="mt-3">

            <p className="font-semibold mb-3">Montagem do pedido</p>
            
            <DataTableComponent/>

            <SheetDemo></SheetDemo>
          </section>
        </DrawerComponent>
      </div>
      <Kanban />
    </div>
  );
}
