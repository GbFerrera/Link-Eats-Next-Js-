"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon, Receipt } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";

import { Title } from "@/components/title"

import {Kanban} from "./components/kanban"
import { Clock, Loader, CheckCircle,CirclePlus } from 'lucide-react'; 
import { Button } from "@/components/ui/button";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function OrdersPage(){

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2024, 0, 20),
    to: addDays(new Date(2024, 0, 20), 20),
  });

return(

<div>


<div className="flex flex-col lg:justify-between lg:flex-row mb-10">

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

      <Sheet>
  <SheetTrigger className="mb-5">

    <Button>
      Criar novo pedido
      <CirclePlus/>
      </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Detalhes do novo pedido</SheetTitle>
      <SheetDescription>
        
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>







<Kanban/>


</div>



)





}