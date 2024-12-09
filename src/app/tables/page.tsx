import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import { Button } from "@/components/ui/button";

import { Title } from "@/components/title";

import { Star, Store } from "lucide-react";

export default function TablesPage() {
  return (
    <div className="">
      <Title>Mesas</Title>
      <h2 className="mb-5">Lista de mesas</h2>

      <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Mesas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="system">Todas</SelectItem>
              <SelectItem value="light">Ocupadas</SelectItem>
              <SelectItem value="dark">Livre</SelectItem>
            </SelectContent>
          </Select>

      <section className="flex flex-col mt-5 gap-8">
 
         
      <div className="flex w-[300px] overflow-auto md:grid md:w-full md:grid-cols-2 gap-4 md:h-[300px] ">
  <Button className="flex flex-col items-center justify-center h-20 border-2 border-dashed border-blue-500 text-blue-500 rounded-lg">
    <span className="font-bold">01</span>
    <span className="text-xs mt-1">7 min</span>
  </Button>

  <Button className="flex flex-col items-center justify-center h-20 border-2 border-dashed border-blue-500 text-blue-500 rounded-lg">
    <span className="font-bold">02</span>
  </Button>

  <Button className="flex flex-col items-center justify-center h-20 border-2 border-dashed border-blue-500 text-blue-500 rounded-lg">
    <span className="font-bold">03</span>
  </Button>

  <Button className="flex flex-col items-center justify-center h-20 border-2 border-dashed border-blue-500 text-blue-500 rounded-lg">
    <span className="font-bold">04</span>
  </Button>

  <Button className="flex flex-col items-center justify-center h-20 border-2 border-dashed border-blue-500 text-blue-500 rounded-lg">
    <span className="font-bold">05</span>
  </Button>

  <Button className="flex flex-col items-center justify-center h-20 border-2 border-dashed border-blue-500 text-blue-500 rounded-lg">
    <span className="font-bold">06</span>
  </Button>

  <Button className="flex flex-col items-center justify-center h-20 border-2 border-dashed border-blue-500 text-blue-500 rounded-lg">
    <span className="font-bold">07</span>
    <span className="text-xs mt-1">32 min</span>
  </Button>

  <Button className="flex flex-col items-center justify-center h-20 bg-blue-500 text-white rounded-lg">
    <span className="font-bold">08</span>
    <span className="text-xs mt-1">12 min</span>
  </Button>

  <Button className="flex flex-col items-center justify-center h-20 border-2 border-dashed border-blue-500 text-blue-500 rounded-lg">
    <span className="font-bold">09</span>
  </Button>

  <Button className="flex flex-col items-center justify-center h-20 border-2 border-red-500 text-red-500 rounded-lg">
    <span className="font-bold">10</span>
    <span className="text-xs mt-1">2 min</span>
  </Button>

  <Button className="flex flex-col items-center justify-center h-20 border-2 border-dashed border-blue-500 text-blue-500 rounded-lg">
    <span className="font-bold">11</span>
  </Button>

  <Button className="flex flex-col items-center justify-center h-20 border-2 border-dashed border-blue-500 text-blue-500 rounded-lg">
    <span className="font-bold">12</span>
  </Button>
</div>


         
  

        <div className="w-full">
          <h3>Mesa N&ordm; 10</h3>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6 max-w-[320px] mx-auto">
              <CardHeader className="p-0 border-b border-gray-300">
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                  <p className="font-bold">Pedido #1</p>
                  <Store />
                </div>
                <div className="mb-4">16/09 às 15:00</div>
              </CardHeader>

              <CardDescription className="my-5">
                <div className="border-b border-gray-300 mb-3">
                  <p className="font-bold text-xl w-full">Gabriel Ferreira</p>
                  <p className="inline-flex mb-4">
                    <Star className="h-4 fill-yellow-500" />
                    Já realizou 20 compras
                  </p>
                </div>

                <div className="border-b border-gray-300">
                  <div className="flex justify-between">
                    <p>Tempo em espera</p>
                    <p className="font-bold">10 min</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Tipo de entrega</p>
                    <p className="font-bold">Delivery</p>
                  </div>
                </div>
              </CardDescription>

              <CardContent className="p-0">
                <p>Detalhes</p>
                <ul className="mt-4 border-b border-gray-300 overflow-auto max-h-[100px] grid gap-2 pb-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://picsum.photos/200/300?random=${
                          index + 1
                        }`}
                        alt="Imagem de teste"
                      />
                      <div className="flex-1 mx-2">
                        <p className="text-[15px]">Pizza de Calabresa</p>
                        <p className="text-[13px]">x 3</p>
                      </div>
                      <div className="text-[13px]">R$ 59,90</div>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex-none py-5 px-0">
                <div className="flex w-full justify-between">
                  <p>Total</p>
                  <p>R$ 300</p>
                </div>
              </CardFooter>

              <Button className="w-full rounded-xl">Atualizar pedido</Button>
            </Card>

            <Card className="p-6 max-w-[320px] mx-auto">
              <CardHeader className="p-0 border-b border-gray-300">
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                  <p className="font-bold">Pedido #1</p>
                  <Store />
                </div>
                <div className="mb-4">16/09 às 15:00</div>
              </CardHeader>

              <CardDescription className="my-5">
                <div className="border-b border-gray-300 mb-3">
                  <p className="font-bold text-xl w-full">Gabriel Ferreira</p>
                  <p className="inline-flex mb-4">
                    <Star className="h-4 fill-yellow-500" />
                    Já realizou 20 compras
                  </p>
                </div>

                <div className="border-b border-gray-300">
                  <div className="flex justify-between">
                    <p>Tempo em espera</p>
                    <p className="font-bold">10 min</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Tipo de entrega</p>
                    <p className="font-bold">Delivery</p>
                  </div>
                </div>
              </CardDescription>

              <CardContent className="p-0">
                <p>Detalhes</p>
                <ul className="mt-4 border-b border-gray-300 overflow-auto max-h-[100px] grid gap-2 pb-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://picsum.photos/200/300?random=${
                          index + 1
                        }`}
                        alt="Imagem de teste"
                      />
                      <div className="flex-1 mx-2">
                        <p className="text-[15px]">Pizza de Calabresa</p>
                        <p className="text-[13px]">x 3</p>
                      </div>
                      <div className="text-[13px]">R$ 59,90</div>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex-none py-5 px-0">
                <div className="flex w-full justify-between">
                  <p>Total</p>
                  <p>R$ 300</p>
                </div>
              </CardFooter>

              <Button className="w-full rounded-xl">Atualizar pedido</Button>
            </Card>

            <Card className="p-6 max-w-[320px] mx-auto">
              <CardHeader className="p-0 border-b border-gray-300">
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                  <p className="font-bold">Pedido #1</p>
                  <Store />
                </div>
                <div className="mb-4">16/09 às 15:00</div>
              </CardHeader>

              <CardDescription className="my-5">
                <div className="border-b border-gray-300 mb-3">
                  <p className="font-bold text-xl w-full">Gabriel Ferreira</p>
                  <p className="inline-flex mb-4">
                    <Star className="h-4 fill-yellow-500" />
                    Já realizou 20 compras
                  </p>
                </div>

                <div className="border-b border-gray-300">
                  <div className="flex justify-between">
                    <p>Tempo em espera</p>
                    <p className="font-bold">10 min</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Tipo de entrega</p>
                    <p className="font-bold">Delivery</p>
                  </div>
                </div>
              </CardDescription>

              <CardContent className="p-0">
                <p>Detalhes</p>
                <ul className="mt-4 border-b border-gray-300 overflow-auto max-h-[100px] grid gap-2 pb-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://picsum.photos/200/300?random=${
                          index + 1
                        }`}
                        alt="Imagem de teste"
                      />
                      <div className="flex-1 mx-2">
                        <p className="text-[15px]">Pizza de Calabresa</p>
                        <p className="text-[13px]">x 3</p>
                      </div>
                      <div className="text-[13px]">R$ 59,90</div>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex-none py-5 px-0">
                <div className="flex w-full justify-between">
                  <p>Total</p>
                  <p>R$ 300</p>
                </div>
              </CardFooter>

              <Button className="w-full rounded-xl">Atualizar pedido</Button>
            </Card>

            <Card className="p-6 max-w-[320px] mx-auto">
              <CardHeader className="p-0 border-b border-gray-300">
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                  <p className="font-bold">Pedido #1</p>
                  <Store />
                </div>
                <div className="mb-4">16/09 às 15:00</div>
              </CardHeader>

              <CardDescription className="my-5">
                <div className="border-b border-gray-300 mb-3">
                  <p className="font-bold text-xl w-full">Gabriel Ferreira</p>
                  <p className="inline-flex mb-4">
                    <Star className="h-4 fill-yellow-500" />
                    Já realizou 20 compras
                  </p>
                </div>

                <div className="border-b border-gray-300">
                  <div className="flex justify-between">
                    <p>Tempo em espera</p>
                    <p className="font-bold">10 min</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Tipo de entrega</p>
                    <p className="font-bold">Delivery</p>
                  </div>
                </div>
              </CardDescription>

              <CardContent className="p-0">
                <p>Detalhes</p>
                <ul className="mt-4 border-b border-gray-300 overflow-auto max-h-[100px] grid gap-2 pb-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://picsum.photos/200/300?random=${
                          index + 1
                        }`}
                        alt="Imagem de teste"
                      />
                      <div className="flex-1 mx-2">
                        <p className="text-[15px]">Pizza de Calabresa</p>
                        <p className="text-[13px]">x 3</p>
                      </div>
                      <div className="text-[13px]">R$ 59,90</div>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex-none py-5 px-0">
                <div className="flex w-full justify-between">
                  <p>Total</p>
                  <p>R$ 300</p>
                </div>
              </CardFooter>

              <Button className="w-full rounded-xl">Atualizar pedido</Button>
            </Card>

            <Card className="p-6 max-w-[320px] mx-auto">
              <CardHeader className="p-0 border-b border-gray-300">
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                  <p className="font-bold">Pedido #1</p>
                  <Store />
                </div>
                <div className="mb-4">16/09 às 15:00</div>
              </CardHeader>

              <CardDescription className="my-5">
                <div className="border-b border-gray-300 mb-3">
                  <p className="font-bold text-xl w-full">Gabriel Ferreira</p>
                  <p className="inline-flex mb-4">
                    <Star className="h-4 fill-yellow-500" />
                    Já realizou 20 compras
                  </p>
                </div>

                <div className="border-b border-gray-300">
                  <div className="flex justify-between">
                    <p>Tempo em espera</p>
                    <p className="font-bold">10 min</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Tipo de entrega</p>
                    <p className="font-bold">Delivery</p>
                  </div>
                </div>
              </CardDescription>

              <CardContent className="p-0">
                <p>Detalhes</p>
                <ul className="mt-4 border-b border-gray-300 overflow-auto max-h-[100px] grid gap-2 pb-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://picsum.photos/200/300?random=${
                          index + 1
                        }`}
                        alt="Imagem de teste"
                      />
                      <div className="flex-1 mx-2">
                        <p className="text-[15px]">Pizza de Calabresa</p>
                        <p className="text-[13px]">x 3</p>
                      </div>
                      <div className="text-[13px]">R$ 59,90</div>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex-none py-5 px-0">
                <div className="flex w-full justify-between">
                  <p>Total</p>
                  <p>R$ 300</p>
                </div>
              </CardFooter>

              <Button className="w-full rounded-xl">Atualizar pedido</Button>
            </Card>

            <Card className="p-6 max-w-[320px] mx-auto">
              <CardHeader className="p-0 border-b border-gray-300">
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                  <p className="font-bold">Pedido #1</p>
                  <Store />
                </div>
                <div className="mb-4">16/09 às 15:00</div>
              </CardHeader>

              <CardDescription className="my-5">
                <div className="border-b border-gray-300 mb-3">
                  <p className="font-bold text-xl w-full">Gabriel Ferreira</p>
                  <p className="inline-flex mb-4">
                    <Star className="h-4 fill-yellow-500" />
                    Já realizou 20 compras
                  </p>
                </div>

                <div className="border-b border-gray-300">
                  <div className="flex justify-between">
                    <p>Tempo em espera</p>
                    <p className="font-bold">10 min</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Tipo de entrega</p>
                    <p className="font-bold">Delivery</p>
                  </div>
                </div>
              </CardDescription>

              <CardContent className="p-0">
                <p>Detalhes</p>
                <ul className="mt-4 border-b border-gray-300 overflow-auto max-h-[100px] grid gap-2 pb-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://picsum.photos/200/300?random=${
                          index + 1
                        }`}
                        alt="Imagem de teste"
                      />
                      <div className="flex-1 mx-2">
                        <p className="text-[15px]">Pizza de Calabresa</p>
                        <p className="text-[13px]">x 3</p>
                      </div>
                      <div className="text-[13px]">R$ 59,90</div>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex-none py-5 px-0">
                <div className="flex w-full justify-between">
                  <p>Total</p>
                  <p>R$ 300</p>
                </div>
              </CardFooter>

              <Button className="w-full rounded-xl">Atualizar pedido</Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
