import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";

import { ShoppingCart, Box, Info } from "lucide-react";

export function CarouselOrientation() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full flex-1"
    >
      <CarouselContent className="-mt-1 max-h-[400px] w-full ">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 w-full">
            <div>
              <Card>
                <CardContent className="flex gap-6 p-6 h-40 w-full overflow-hidden">
                  <div>
                    <img
                      className="h-[80px] w-[80px] rounded-md mb-3 object-cover"
                      src="https://res.cloudinary.com/ddl9w1a1n/image/upload/v1731868843/avatars/product_38.jpg"
                      alt=""
                    />
                    <p className="text-xl flex gap-2 text-center font-bold">
                      <span className="text-xs ">RS</span>
                      20,00
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-xl">
                      Hambúrguer artesanal
                    </p>

                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam amet laboriosam ...
                    </p>

                    <div className="flex gap-4 mt-2">
                      <div className="flex gap-2 justify-between">
                        <ShoppingCart className="h-full" />

                        <div>
                          <strong>Vendas</strong>

                          <p>1200</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Box className="h-full" />

                        <div>
                          <strong>Estoque</strong>

                          <p>32</p>
                        </div>
                      </div>

                      <Drawer>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <DrawerTrigger>
                                <Info />
                              </DrawerTrigger>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Detalhes do produto</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <DrawerContent>
                          <DrawerHeader>
                            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                            <DrawerDescription>
                              This action cannot be undone.
                            </DrawerDescription>
                          </DrawerHeader>
                          <DrawerFooter>
                            <Button>Submit</Button>
                            <DrawerClose>
                              <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                          </DrawerFooter>
                        </DrawerContent>
                      </Drawer>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

  <CarouselNext />
    </Carousel>
  );
}
