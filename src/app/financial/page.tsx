import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import { Button } from "@/components/ui/button";
import { Title } from "@/components/title"

import { HandCoins, Edit, CirclePlus } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function FinancialPage() {
  return (
    <div>
    <Title>Financeiro</Title>
    <p className="mb-10">Visão geral do setor financeiro</p>
  
    <div id="cards" className="flex gap-7 flex-col lg:justify-between lg:flex-row">
      {/* Card Total em caixa */}
      <Card className="rounded-3xl flex-1">
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between">Total em caixa</div>
          </CardTitle>
          <CardDescription>No dia de hoje</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="font-bold text-xl sm:text2xl">R$ 100,00</p>
        </CardContent>
        <CardFooter>
          <Button className="rounded-xl flex gap-3">
            <HandCoins />
            Realizar Sangria
          </Button>
        </CardFooter>
      </Card>
  
      {/* Seção Principais Despesas */}
      <div className="col-span-2 mt-8 sm:mt-0">

        <div className="flex justify-between mb-12 ">
        <h2 className="text-lg font-semibold ">Principais Despesas</h2>

        <Sheet>
  <SheetTrigger className="mb-5">

    <Button>
      Criar novo pedido
      <CirclePlus/>
      </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Detalhes da nova despesa</SheetTitle>
      <SheetDescription>
        
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
        
        
        </div>
        
        {/* Cards menores */}
        <div className=" w-full grid gap-4 p-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card className="rounded-3xl flex-1 sm:h-[150px]">
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between items-center">
                  Aluguel
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Button className="rounded-full p-2">
                          <Edit />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Editar Despesa</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardTitle>
              <CardDescription>Despesa fixa</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-lg">R$ 100,00</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl h-[200px] sm:h-[150px]">
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between items-center">
                  Aluguel
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Button className="rounded-full p-2">
                          <Edit />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Editar Despesa</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardTitle>
              <CardDescription>Despesa fixa</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-lg">R$ 100,00</p>
            </CardContent>
          </Card>


          <Card className="rounded-3xl h-[200px] sm:h-[150px]">
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between items-center">
                  Aluguel
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Button className="rounded-full p-2">
                          <Edit />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Editar Despesa</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardTitle>
              <CardDescription>Despesa fixa</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-lg">R$ 100,00</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl h-[200px] sm:h-[150px]">
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between items-center">
                  Aluguel
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Button className="rounded-full p-2">
                          <Edit />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Editar Despesa</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardTitle>
              <CardDescription>Despesa fixa</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-lg">R$ 100,00</p>
            </CardContent>
          </Card>

         


          
  
          {/* Adicione mais cards conforme necessário */}
        </div>
      </div>
    </div>
  </div>
  

  );
}
