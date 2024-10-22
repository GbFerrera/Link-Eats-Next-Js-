"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon, Receipt } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import { ComponentBarChart } from "@/components/bar-chat";
import { CarouselOrientation } from "@/components/carousel";

export default function Dashboard({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2024, 0, 20),
    to: addDays(new Date(2024, 0, 20), 20),
  });

  return (
    <div className="grid gap-4 sm:gap-9">
      <div className="flex flex-col lg:justify-between lg:flex-row mb-10">
        <h1 className="font-bold text-2xl sm:text-3xl">Dashboard</h1>
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


      <div id="cards" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

  
        <Card>
          <CardHeader>
            <CardTitle>
              
              <div className="flex justify-between" >
              Receita total
              
              <Receipt/>

              </div>
              </CardTitle>
            <CardDescription>Dos últimos 30 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-bold">R$ 100,00</p>
          </CardContent>
        
        </Card>


    

 
        <Card>
          <CardHeader>
            <CardTitle>
              
              <div className="flex justify-between" >
              Receita total
              
              <Receipt/>

              </div>
              </CardTitle>
            <CardDescription>Dos últimos 30 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-bold">R$ 100,00</p>
          </CardContent>
         
        </Card>


  

      
        <Card>
          <CardHeader>
            <CardTitle>
              
              <div className="flex justify-between" >
              Receita total
              
              <Receipt/>

              </div>
              </CardTitle>
            <CardDescription>Dos últimos 30 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-bold">R$ 100,00</p>
          </CardContent>
        </Card>


     



   
        <Card>
          <CardHeader>
            <CardTitle>
              
              <div className="flex justify-between" >
              Receita total
              
              <Receipt/>

              </div>
              </CardTitle>
            <CardDescription>Dos últimos 30 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-bold">R$ 100,00</p>
          </CardContent>
         
        </Card>


  


     


      </div>


      <div className="flex flex-col lg:flex-row gap-12 justify-between">

        <ComponentBarChart/>


        <div className="flex-1">

        <h2 className="mb-5 font-bold text-xl w-full">Top produtos mais vendidos</h2>

        <CarouselOrientation/>
        
        </div>
        </div>
    </div>
  );
}
