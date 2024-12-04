import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Pin,BadgeDollarSign, Pencil,CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CarouselPayments() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:w-full">
            <div className="p-1">
              <Card>
                <CardContent className="aspect-square p-3">
                  <div className="flex">
                    <p className="font-bold">Pagamento do funcionario</p>

                    
                    <Pin />
                  </div>


                  <p className="my-3 flex gap-1 font-bold"><BadgeDollarSign/> 1.800</p>
                  <p className="my-3 flex gap-1 font-bold"><CalendarClock/> Dia 1</p>

                  <Button>Editar <Pencil/></Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
