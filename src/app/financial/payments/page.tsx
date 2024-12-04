import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ClockArrowDown, DollarSign, TimerOff, CirclePlus } from "lucide-react";

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

import { Title } from "@/components/title";
import { ComponentPieChart } from "./components/pieChart";
import { TablePaymentsComponent } from "./components/tablePayments";
import { CarouselPayments } from "./components/carousel";

export default function paymentsFinancial() {
  return (
    <div>
      <Title>Pagamentos</Title>
      <p className="mb-10">Visão geral de pagamentos</p>

      <div className="flex-row gap-4 md:flex mb-6">
        <ComponentPieChart />

        <section className="w-full grid gap-3">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 h-1/2">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-between">
                    Totais
                    <DollarSign />
                  </div>
                </CardTitle>
                <CardDescription>Pendentes e Atrasados</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-bold">R$ 100,00</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-between">
                    Pendentes
                    <ClockArrowDown />
                  </div>
                </CardTitle>
                <CardDescription>Pagamentos não pagos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-bold">R$ 100,00</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-between">
                    Atrasados
                    <TimerOff />
                  </div>
                </CardTitle>
                <CardDescription>Pagamentos atrasados</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-bold">R$ 100,00</p>
              </CardContent>
            </Card>
          </div>

          <div className="w-full place-items-center">
            <div className="flex gap-3">
              <p className="font-bold text-2xl mb-3"> Pagamentos fixos</p>

              <Drawer>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <DrawerTrigger>
                        <CirclePlus />
                      </DrawerTrigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Adicionar pagamento Fixo</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Adicione um novo pagamento fixo</DrawerTitle>
                    <DrawerDescription>
                      Exemplo: Sálario de um novo funcionário
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button>
                      Criar <CirclePlus />
                    </Button>
                    <DrawerClose>
                      <Button variant="outline">Cancelar</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>

            <CarouselPayments />
          </div>
        </section>
      </div>


      <div id="table">

      <p className="mt-10 mb-7 font-bold text-2xl">Lista de pagamentos</p>
      <TablePaymentsComponent />
      
      
      
      </div>
    </div>
  );
}
